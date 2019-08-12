import React from "react"
import gql from "graphql-tag"
import styled from "styled-components"
import { useQuery } from "react-apollo-hooks"
import queryString from "query-string"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import FormatPrice from "../components/FormatPrice/FormatPrice"

const Total = styled.div`
  font-size: 25px;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
`

const GET_ORDER = gql`
  query getMyOrders($input: ID!) {
    order: getOrder(id: $input) {
      _id
      total
      deliveryDate
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
    </Page>
  )
}

export default withAuthenticator(OrderDetailPage)
