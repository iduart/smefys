import styled from "styled-components"

const Button = styled.button`
  border-radius: 2rem;
  border: solid transparent 1px;
  color: #ffffff;
  padding: 0;
  margin: 0;
`

export const PrimaryButton = styled(Button)`
  background-color: #3a9517;
  padding: 0.9rem 3rem;
  font-size: 1.2rem;
  font-weight: bold;
  height: 3.4rem;
`

export const SecondaryButton = styled(Button)`
  background-color: #de5b00;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.2rem;
  padding-bottom: 0.4rem;
  font-weight: bold;
  height: 2rem;
`
