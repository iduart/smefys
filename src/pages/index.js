import React from "react"
import Amplify from 'aws-amplify';
import { connect } from "react-redux"
import SEO from "../components/seo"
import "../components/layout.css";

const IndexPage = () => (
  <div>
    <SEO title="Home" />
  </div>
)

function mapStateToProps(state) {
  return {
    
  }
}

export default connect(
  null,
  null
)(IndexPage)
