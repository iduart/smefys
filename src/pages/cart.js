import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import withAuthenticator from "../hoc/withAuthenticator"
import MenuItem from "../components/MenuItem/MenuItem"
import { Selectors as CartSelectors } from "../store/cart"

const ContentBody = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`

const CartPage = ({ cart = [] }) => {
  return (
    <ContentBody>
      {cart.map(cartItem => (
        <MenuItem key={cartItem._id} item={cartItem} />
      ))}
    </ContentBody>
  )
}

function mapStateToProps(state) {
  return {
    cart: CartSelectors.getCart(state),
  }
}

export default connect(mapStateToProps)(withAuthenticator(CartPage))
