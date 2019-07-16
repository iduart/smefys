import React from "react"
import styled from "styled-components"
import { navigate } from "gatsby"
import { connect } from "react-redux"
import NumberFormat from "react-number-format"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { Selectors as CartSelectors } from "../store/cart"
import { Selectors as OrderSelectors } from "../store/order"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import { PrimaryButton, SecondaryButton } from "../components/Button/Button"

const ConfirmOrderButton = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 2rem;
`

const CartPage = ({ cart = [], orderDate }) => {
  const { items = [] } = cart
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
            <NumberFormat
              value={cart.totalPrice}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
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
        <PrimaryButton>Confirmar Pedido</PrimaryButton>
      </ConfirmOrderButton>
    </Page>
  )
}

function mapStateToProps(state) {
  return {
    cart: CartSelectors.getCart(state),
    orderDate: OrderSelectors.getOrderDate(state),
  }
}

export default connect(mapStateToProps)(withAuthenticator(CartPage))
