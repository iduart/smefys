import React from "react"
import gql from "graphql-tag"
import { navigate } from 'gatsby'
import styled from "styled-components"
import { useQuery } from "react-apollo-hooks"
import queryString from "query-string"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import FormatPrice from "../components/FormatPrice/FormatPrice"
import { SecondaryButton } from "../components/Button/Button"

const Total = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
`

const Footer = styled.div`
  display: flex;
  justify-content: center;
`

const GET_ORDER = gql`
  query getMyOrders($input: ID!) {
    order: getOrder(id: $input) {
      _id
      total
      deliveryDate
      createdAt
      menuItems {
        id
        quantity
        name
        price
      }
    }
  }
`

const OrderDetailPage = ({ location }) => {
  const { id: orderId } = queryString.parse(location.search)
  const { data = {} } = useQuery(GET_ORDER, {
    variables: { input: orderId },
  })

  const { order = {} } = data

  return (
    <Page>
      <PageHeader />
      <ContentHeader>
        <div className="title">Detalle del pedido</div>
        <div>
          <b>Fecha {order.createdAt}</b>
        </div>
      </ContentHeader>
      <ContentBody>
        {order.menuItems &&
          order.menuItems.map(menuItem => (
            <MenuItem key={menuItem._id} item={menuItem} readonly />
          ))}
        <Total>
          Total: <FormatPrice price={order.total} />
        </Total>
      </ContentBody>
      <Footer>
        <SecondaryButton onClick={() => navigate("orders")}>
          Mis pedidos
        </SecondaryButton>
      </Footer>
    </Page>
  )
}

export default withAuthenticator(OrderDetailPage)
