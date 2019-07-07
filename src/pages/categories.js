import React from "react"
import styled from "styled-components"
import withAuthenticator from "../hoc/withAuthenticator"
import LayoutOrder from "../components/Layouts/LayoutOrder"
import { authStatus } from '../utils/constants';

const ContentBody = styled.div`
  display: grid;
  margin-top: 1.5rem;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  padding: 0 3rem;
`

const Category = styled.div`
  background-color: #47b5be;
  min-height: 9rem;
  padding: 10%;
  padding-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  div {
    background-color: #ffffff;
    border-radius: 20px;
    text-align: center;
    bottom: 20%;
    padding: 0.2rem 0.5rem;
  }
`

const CategoriesPage = props => {
  return (
    props.authState == authStatus.SIGNED_IN && (
      <LayoutOrder>
        <ContentBody>
          <Category>
            <div>Carnes</div>
          </Category>
          <Category>
            <div>Arroz</div>
          </Category>
          <Category>
            <div>Granos</div>
          </Category>
          <Category>
            <div>Ensalada</div>
          </Category>
        </ContentBody>
      </LayoutOrder>
    )
  )
}

export default withAuthenticator(CategoriesPage)
