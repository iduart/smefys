import React from "react"
import styled from "styled-components"
import { graphql } from "gatsby"
import withAuthenticator from "../hoc/withAuthenticator"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import { authStatus } from "../utils/constants"
import Category from "../components/Category/Category"

const ContentBody = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 0 1rem;
`

const CategoriesPage = ({ data, authState }) => {
  const { categories = [] } = data.api

  return (
    authState === authStatus.SIGNED_IN && (
      <LayoutOrder>
        <ContentBody>
          {categories.map(({ _id, name }) => (
            <Category key={_id} name={name} id={_id} />
          ))}
        </ContentBody>
      </LayoutOrder>
    )
  )
}

export default withAuthenticator(CategoriesPage)

export const query = graphql`
  query {
    api {
      categories: getCategories {
        _id
        name
      }
    }
  }
`
