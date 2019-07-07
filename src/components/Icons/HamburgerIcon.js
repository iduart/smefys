import React from "react"

export const HamburgerIcon = ({ color = "#FFFFFF", ...props }) => (
  <svg
    fill={color}
    height="32"
    id="Layer_1"
    viewBox="0 0 32 32"
    width="32"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M4 10h24a2 2 0 0 0 0-4H4a2 2 0 0 0 0 4zm24 4H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4zm0 8H4a2 2 0 0 0 0 4h24a2 2 0 0 0 0-4z" />
  </svg>
)
