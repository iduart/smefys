import React from "react"
import styled from "styled-components"
import { LogoIcon } from "../Icons"
import { SecondaryButton } from "../Button/Button"

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
  padding-right: 2rem;
`

const ColorBlock = styled.div`
  background-color: ${props => props.color}
  width: 1.5rem;
  height: 100%;
`

const Title = styled.div`
  margin-left: 1rem;
`

const HeaderIcon = styled(LogoIcon)`
  margin-left: auto;
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

const Footer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`

const LayoutOrder = ({ children }) => {
  return (
    <Page>
      <Header>
        <ColorBlock color="#3A9517" />
        <ColorBlock color="#DE5B00" />
        <Title>Categor&iacute;as</Title>
        <HeaderIcon />
      </Header>
      <Content>
        <ContentHeader>
          <div className="title">Mañana</div>
          <div className="order-date">
            <span>Miercoles &bull;</span>
            <span>14 &bull;</span>
            <span>Septiembre</span>
          </div>
          <div className="total-payment">
            <div className="total-payment-title">TOTAL A PAGAR</div>
            <div className="total-payment-value">$10.500</div>
          </div>
        </ContentHeader>
        {children}
      </Content>
      <Footer>
        <SecondaryButton>Resumen del pedido</SecondaryButton>
      </Footer>
    </Page>
  )
}

export default LayoutOrder
