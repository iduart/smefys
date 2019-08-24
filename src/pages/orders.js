import React from "react"
import { connect } from "react-redux"
import gql from "graphql-tag"
import styled from "styled-components"
import { useQuery } from "react-apollo-hooks"
import { navigate } from "gatsby"
import withAuthenticator from "../hoc/withAuthenticator"
import ListItem from "../components/ListItem/ListItem"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import FormatPrice from "../components/FormatPrice/FormatPrice"
import { formatDate } from "../utils/formatDate"
import { Selectors as AuthSelectors } from "../store/auth"

const OrderItem = styled(ListItem)`
  cursor: pointer;
`

const GET_MY_ORDERS = gql`
  query getMyOrders($input: ID!) {
    orders: getOrdersByUser(userId: $input) {
      _id
      total
      deliveryDate
    }
  }
`

const GET_USER_BY_AUTH_PROVIDER = gql`
  query getUserByAuthProvider($input: ID!) {
    user: getUserByProviderId(providerId: $input) {
      _id
    }
  }
`

const OrdersPage = ({ authProviderId }) => {
  if (!authProviderId) {
    return null;
  }
  const { data: userResponse = {} } = useQuery(GET_USER_BY_AUTH_PROVIDER, { variables: { input: authProviderId }})
  const { user = {} } = userResponse;

  const { data = {} } = useQuery(GET_MY_ORDERS, {
    variables: { input: user._id },
  })
  const { orders = [] } = data
  return (
    <Page>
      <PageHeader />
      <ContentHeader>
        <div className="title">Mis Pedidos</div>
      </ContentHeader>
      <ContentBody>
        {orders &&
          orders.map(order => (
            <OrderItem
              key={order._id}
              onClick={() => navigate(`/order-detail?id=${order._id}`)}
            >
              <div>{formatDate(order.deliveryDate)}</div>
              <div>{<FormatPrice price={order.total} />}</div>
            </OrderItem>
          ))}
      </ContentBody>
    </Page>
  )
}

function mapStateToProps(state) {
  return {
    authProviderId: AuthSelectors.getAuthProviderId(state),
  }
}

export default connect(mapStateToProps)(withAuthenticator(OrdersPage))
