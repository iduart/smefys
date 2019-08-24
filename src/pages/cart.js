import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import gql from "graphql-tag"
import { useMutation } from "react-apollo-hooks"
import { toast } from "react-toastify"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { Selectors as CartSelectors } from "../store/cart"
import { Selectors as OrderSelectors } from "../store/order"
import { Selectors as AuthSelectors } from "../store/auth"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import { PrimaryButton, SecondaryButton } from "../components/Button/Button"
import FormatPrice from "../components/FormatPrice/FormatPrice"
import { Actions as CartActions } from "../store/cart"
import { GET_MY_ORDERS } from '../apollo/orders'

const ConfirmOrderButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`

const CREATE_ORDER = gql`
  mutation createOrder($input: newOrder!) {
    order: createOrder(order: $input) {
      _id
      total
      deliveryDate
    }
  }
`

const CartPage = ({ cart = [], orderDate, authProviderId, resetCart }) => {
  const { items = [] } = cart
  const [createOrder] = useMutation(CREATE_ORDER);

  const submitOrder = async () => {
    if (!items.length) {
      return
    }
    const menuItems = items.map(item => ({
      id: item._id,
      quantity: item.count,
      price: item.price,
      name: item.name,
    }))
    try {
      const response = await createOrder({
        variables: {
          input: {
            total: cart.totalPrice,
            deliveryDate: orderDate,
            user: authProviderId,
            menuItems,
          },
        },
        update: (store, { data }) => {
          const ordersData = store.readQuery({ query: GET_MY_ORDERS, variables: { input: "5d3d1bba1eb8e532cd46b52c" } });
          store.writeQuery({
            query: GET_MY_ORDERS,
            variables: { input: "5d3d1bba1eb8e532cd46b52c"},
            data: {
              orders: [...ordersData.orders, data.order]
            }
          })
        }
      })
      toast.success("Pedido recibido 😀")
      resetCart()
      const { order } = response.data
      navigate(`order-detail?id=${order._id}`)
    } catch (err) {
      toast.error("Error procesando el pedido 😢")
    }
  }

  return (
    <Page>
      <PageHeader />
      <ContentHeader>
        <div className="title">Resumen del Pedido</div>
        <div>
          <b>Fecha de entrega</b>
        </div>
        <div className="order-date">
          <span>{orderDate.format("dddd")} &bull; </span>
          <span>{orderDate.format("DD")} &bull; </span>
          <span>{orderDate.format("MMMM")}</span>
        </div>
        <div className="total-payment">
          <div className="total-payment-title">TOTAL A PAGAR</div>
          <div className="total-payment-value">
            <FormatPrice price={cart.totalPrice} />
          </div>
        </div>
      </ContentHeader>
      <ContentBody>
        {items.map(cartItem => (
          <MenuItem key={cartItem._id} item={cartItem} />
        ))}
      </ContentBody>
      <ConfirmOrderButton>
        <SecondaryButton onClick={() => navigate("/categories")}>
          Volver
        </SecondaryButton>
        <PrimaryButton onClick={submitOrder}>Confirmar Pedido</PrimaryButton>
      </ConfirmOrderButton>
    </Page>
  )
}

function mapStateToProps(state) {
  return {
    cart: CartSelectors.getCart(state),
    orderDate: OrderSelectors.getOrderDate(state),
    authProviderId: AuthSelectors.getAuthProviderId(state),
  }
}

function mapDispatchToProps(dispatch) {
  return {
    resetCart: () => dispatch(CartActions.resetCart()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withAuthenticator(CartPage))
