import React from "react"
import styled from "styled-components"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import { PlusIcon } from "../components/Icons"

const ContentBody = styled.div`
  padding: 0 1rem;
  margin-top: 1rem;
`

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

const ItemsPage = () => {
  return (
    <LayoutOrder>
      <ContentBody>
        <Item>
          <div className="title">Carne Guisada</div>
          <div className="price">$3000</div>
          <div className="choose">
            <Circle>1</Circle>
            <PlusIcon />
          </div>
        </Item>
        <Item>
          <div className="title">Frijoles</div>
          <div className="price">$3000</div>
          <div className="choose">
            <PlusIcon />
          </div>
        </Item>
        <Item>
          <div className="title">Ensalada Cesar</div>
          <div className="price">$3000</div>
          <div className="choose">
            <PlusIcon />
          </div>
        </Item>
        <Item>
          <div className="title">Sopa</div>
          <div className="price">$3000</div>
          <div className="choose">
            <PlusIcon />
          </div>
        </Item>
      </ContentBody>
    </LayoutOrder>
  )
}

export default ItemsPage
