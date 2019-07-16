import React from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { PlusIcon, MinusIcon } from "../Icons"
import {
  Actions as CartActions,
  Selectors as CartSelectors,
} from "../../store/cart"

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row nowrap;
  border-left: solid #de5b00 6px;
  background-color: #e8e8e8;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 0.8rem;

  .title {
    flex-basis: 40%;
  }

  .price {
    text-align: center;
    flex-basis: 30%;
  }

  .choose {
    display: flex;
    align-items: center;

    & :first-child {
      margin-right: 0.2rem;
    }
  }
`

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

const MenuItem = ({ item = {}, addItem, removeItem, cartItem }) => {
  return (
    <Item>
      <div className="title">{item.name}</div>
      <div className="price">${item.price}</div>
      <div className="choose">
        {cartItem.count ? <MinusIcon onClick={() => removeItem(item)} /> : ""}
        {cartItem.count ? <Circle>{cartItem.count}</Circle> : ""}
        <Icon onClick={() => addItem(item)} />
      </div>
    </Item>
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
