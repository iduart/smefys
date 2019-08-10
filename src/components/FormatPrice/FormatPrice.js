import React from "react"
import NumberFormat from "react-number-format"

const FormatPrice = ({ price }) => (
  <NumberFormat
    value={price}
    displayType={"text"}
    thousandSeparator={true}
    prefix={"$"}
  />
)

export default FormatPrice
