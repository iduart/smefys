import React from "react"
import Amplify from "aws-amplify"
import config from "../aws-exports"
import withAuthenticator from "../hoc/withAuthenticator"
import 'bootstrap/dist/css/bootstrap.min.css';
import "../components/layout.css"

Amplify.configure(config)

const IndexPage = ({ authState}) => authState === 'loading' && <div> Cargando...</div>

export default withAuthenticator(IndexPage)
