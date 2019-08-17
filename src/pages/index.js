import React from "react"
import Amplify from "aws-amplify"
import config from "../aws-exports"
import withAuthenticator from "../hoc/withAuthenticator"
import { toast } from "react-toastify"
import "bootstrap/dist/css/bootstrap.min.css"
import "react-toastify/dist/ReactToastify.css"
import "../components/layout.css"

Amplify.configure(config)
toast.configure({
  autoClose: 5000,
  position: toast.POSITION.BOTTOM_LEFT,
})

const IndexPage = ({ authState }) =>
  authState === "loading" && <div> Cargando...</div>

export default withAuthenticator(IndexPage)
