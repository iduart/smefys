import React from "react"
import styled from "styled-components"
import withAuthenticator from "../hoc/withAuthenticator"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import { authStatus } from '../utils/constants';
import Category from '../components/Category/Category';

const ContentBody = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 0 1rem;
`

const CategoriesPage = props => {
  return (
    props.authState === authStatus.SIGNED_IN && (
      <LayoutOrder>
        <ContentBody>
          <Category name="Carnes" />
          <Category name="Arroces" />
          <Category name="Sancochos" />
          <Category name="Cremas" />
        </ContentBody>
      </LayoutOrder>
    )
  )
}

export default withAuthenticator(CategoriesPage)
