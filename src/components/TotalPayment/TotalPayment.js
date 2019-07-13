import React from "react"
import { connect } from "react-redux"
import NumberFormat from "react-number-format"
import { Selectors as CartSelectors } from "../../store/cart"

const TotalPayment = ({ totalPrice }) =>
  totalPrice ? (
    <div className="total-payment">
      <div className="total-payment-title">TOTAL A PAGAR</div>
      <div className="total-payment-value">
        <NumberFormat
          value={totalPrice}
          displayType={"text"}
          thousandSeparator={true}
          prefix={"$"}
        />
      </div>
    </div>
  ) : null

function mapStateToProps(state) {
  return {
    totalPrice: CartSelectors.getTotalPrice(state),
  }
}

export default connect(mapStateToProps)(TotalPayment)
