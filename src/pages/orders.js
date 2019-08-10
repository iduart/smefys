import React from "react"
import { connect } from "react-redux"
import gql from "graphql-tag"
import styled from 'styled-components';
import { useQuery } from "react-apollo-hooks"
import withAuthenticator from "../hoc/withAuthenticator"
import ListItem from "../components/ListItem/ListItem"
import { Page, ContentBody, ContentHeader } from "../components/Layouts/Common"
import PageHeader from "../components/PageHeader/PageHeader"
import FormatPrice from '../components/FormatPrice/FormatPrice';
import { esMoment } from '../utils/formatDate';

const OrderItem = styled(ListItem)` 
  cursor: pointer;
`

const GET_MY_ORDERS = gql`
  query getMyOrders($input: ID!) {
    orders: getOrdersByUser(userId: $input) {
      total
      deliveryDate
    }
  }
`

const OrdersPage = () => {
  const { data = {} } = useQuery(GET_MY_ORDERS, {
    variables: { input: "5d3d1bba1eb8e532cd46b52c" },
  })
  const { orders = [] } = data;
  return (
    <Page>
      <PageHeader />
      <ContentHeader>
        <div className="title">Mis Pedidos</div>
      </ContentHeader>
      <ContentBody>
        {orders && orders.map(order => (
          <OrderItem>
            <div>{esMoment(new Date(order.deliveryDate)).format('LL')}</div>
            <div>{<FormatPrice price={order.total} />}</div>
          </OrderItem>
        ))}
      </ContentBody>
    </Page>
  )
}

function mapStateToProps(state) {
  return {}
}

export default connect(mapStateToProps)(withAuthenticator(OrdersPage))
