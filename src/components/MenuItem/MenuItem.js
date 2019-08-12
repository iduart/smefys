import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { PlusIcon, MinusIcon } from "../Icons"
import ListItem from "../ListItem/ListItem"
import FormatPrice from "../FormatPrice/FormatPrice"
import {
  Actions as CartActions,
  Selectors as CartSelectors,
} from "../../store/cart"

const Circle = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: #ffffff;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
`

const Icon = styled(PlusIcon)`
  cursor: pointer;
  margin-left: 3px;
`

const Title = styled.div`
  flex-basis: 40%;
`

const Price = styled.div`
  text-align: center;
  flex-basis: 30%;
`

const Choose = styled.div`
  display: flex;
  align-items: center;

  & :first-child {
    margin-right: 0.2rem;
  }
`

const MenuItem = ({ item = {}, addItem, removeItem, cartItem, readonly }) => {
  return (
    <ListItem>
      <Title>{item.name}</Title>
      <Price>
        <FormatPrice price={item.price} />
      </Price>
      {!readonly && (
        <Choose>
          {cartItem.count ? <MinusIcon onClick={() => removeItem(item)} /> : ""}
          {cartItem.count ? <Circle>{cartItem.count}</Circle> : ""}
          <Icon onClick={() => addItem(item)} />
        </Choose>
      )}
    </ListItem>
  )
}

function mapStateToProps(state, { item }) {
  return {
    cartItem: CartSelectors.getItem(state, item._id) || {},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    addItem: item => dispatch(CartActions.addItem(item)),
    removeItem: id => dispatch(CartActions.removeItem(id)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuItem)
