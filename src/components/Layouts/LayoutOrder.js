import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import styled from "styled-components"
import { SecondaryButton } from "../Button/Button"
import NumberFormat from "react-number-format"
import { Selectors as CartSelectors } from "../../store/cart"
import { Selectors as OrderSelectors } from "../../store/order"
import PageHeader from "../PageHeader/PageHeader"
import { Page, ContentHeader } from "./Common"

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const CheckOrderButton = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  
  > * {
    margin-left: 2rem;
  }
`

const LayoutOrder = ({ children, orderDate, ...props }) => {
  return (
    <Page>
      <PageHeader />
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
                <SecondaryButton onClick={() => navigate("/categories")}>
                  Categorias
                </SecondaryButton>
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
    orderDate: OrderSelectors.getOrderDate(state),
  }
}

export default connect(mapStateToProps)(LayoutOrder)
