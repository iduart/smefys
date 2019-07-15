import React, { useState } from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import styled from "styled-components"
import { Auth } from "aws-amplify"
import { Collapse } from "reactstrap"
import { LogoIcon, HamburgerIcon } from "../Icons"
import { SecondaryButton } from "../Button/Button"
import NumberFormat from "react-number-format"
import { Selectors as CartSelectors } from "../../store/cart"
import { esMoment } from "../../utils/formatDate"

const Page = styled.div`
  font-family: arial;
  color: #7c7c7c;
`

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 4rem;
  background-color: #ff8533;
  color: #ffffff;
  font-size: 1.4rem;
  align-items: center;
  padding-left: 0.5rem;
`

const ColorBlock = styled.div`
  background-color: ${props => props.color}
  width: 1.5rem;
  height: 100%;
`

const HeaderIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const ContentHeader = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  margin-top: 0.8rem;

  .title {
    color: #ff8533;
    font-size: 1.8rem;
    font-weight: bold;
  }

  .order-date {
    margin-top: 0.5rem;

    span {
      padding-bottom: 0.4rem;
      text-transform: capitalize;
    }

    span:nth-child(1) {
      border-bottom: solid #de5b00 2px;
    }

    span:nth-child(2) {
      border-bottom: solid #3a9517 2px;
    }

    span:nth-child(3) {
      border-bottom: solid #b3b3b3 2px;
    }
  }

  .total-payment {
    margin-top: 1rem;

    .total-payment-value {
      font-weight: bold;
      text-align: center;
    }
  }
`

const CheckOrderButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const HamburgerMenu = styled.div`
  padding: 1rem;
  background-color: #ccc;
  color: #ffffff;
  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }
`

const LayoutOrder = ({ children, ...props }) => {
  const tomorrow = esMoment().add(1, "day")
  const [isOpen, setIsOpen] = useState(false)
  const [orderDate] = useState(tomorrow)

  const signOut = () => {
    Auth.signOut()
  }
  return (
    <Page>
      <Header>
        <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
        <HeaderIcon>
          <LogoIcon />
        </HeaderIcon>
        <ColorBlock color="#3A9517" />
        <ColorBlock color="#DE5B00" />
      </Header>
      <Collapse isOpen={isOpen}>
        <HamburgerMenu>
          <ul>
            <li onClick={signOut}>Logout</li>
          </ul>
        </HamburgerMenu>
      </Collapse>
      <Content>
        <ContentHeader>
          <div className="title">Arma tu almuerzo para mañana</div>
          <div className="order-date">
            <span>{orderDate.format("dddd")} &bull; </span>
            <span>{orderDate.format("DD")} &bull; </span>
            <span>{orderDate.format("MMMM")}</span>
          </div>
          {props.totalPrice ? (
            <>
              <div className="total-payment">
                <div className="total-payment-title">TOTAL A PAGAR</div>
                <div className="total-payment-value">
                  <NumberFormat
                    value={props.totalPrice}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </div>
              </div>
              <CheckOrderButton>
                <SecondaryButton onClick={() => navigate("/cart")}>
                  Resumen del pedido
                </SecondaryButton>
              </CheckOrderButton>
            </>
          ) : null}
        </ContentHeader>
        {children}
      </Content>
    </Page>
  )
}

function mapStateToProps(state) {
  return {
    totalPrice: CartSelectors.getTotalPrice(state),
  }
}

export default connect(mapStateToProps)(LayoutOrder)
