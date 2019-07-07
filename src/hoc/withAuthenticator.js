import React from "react"
import { Authenticator } from "aws-amplify-react/dist/Auth"
import Login from "../components/Login/Login"

const withAuthenticator = WrappedComponent => (props) => {
  return (
    <Authenticator hideDefault={true}>
      <Login />
      <WrappedComponent {...props} />
    </Authenticator>
  )
}

export default withAuthenticator;
