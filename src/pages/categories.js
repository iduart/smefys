import React from "react"
import styled from "styled-components"
import { useQuery } from "react-apollo-hooks"
import gql from 'graphql-tag'
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

const GET_CATEGORIES = gql`
  query {
    categories: getCategories {
      _id
      name
    }
  }
`

const CategoriesPage = ({ authState }) => {
  const { data = {} } = useQuery(GET_CATEGORIES);
  const { categories = [] } = data;

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
