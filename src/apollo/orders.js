import gql from "graphql-tag"

export const GET_MY_ORDERS = gql`
  query getMyOrders($input: ID!) {
    orders: getOrdersByUser(userId: $input) {
      _id
      total
      deliveryDate
    }
  }
`