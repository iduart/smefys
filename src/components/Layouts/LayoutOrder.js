import React from "react"
import { connect } from "react-redux"
import { navigate } from "gatsby"
import styled from "styled-components"
import { PrimaryButton, SecondaryButton } from "../Button/Button"
import { Selectors as CartSelectors } from "../../store/cart"
import { Selectors as OrderSelectors } from "../../store/order"
import PageHeader from "../PageHeader/PageHeader"
import { Page, ContentHeader } from "./Common"
import FormatPrice from "../FormatPrice/FormatPrice"

const Content = styled.div`
  display: flex;
  flex-flow: column nowrap;
`

const CheckOrderButton = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row wrap;
  margin-top: 2rem;

  > * {
    flex-basis: 100%;
    margin-top: 1rem;
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
                  <FormatPrice price={props.totalPrice} />
                </div>
              </div>
              <CheckOrderButton>
                <SecondaryButton onClick={() => navigate("/categories")}>
                  Categorias
                </SecondaryButton>
                <PrimaryButton onClick={() => navigate("/cart")}>
                  Resumen del pedido
                </PrimaryButton>
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
