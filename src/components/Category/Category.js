import React from "react"
import { navigate } from 'gatsby';
import styled from "styled-components"

const Container = styled.div`
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
    white-space: nowrap;
  }
`

const Category = ({ id, name }) => (
  <Container>
    <div onClick={() => navigate(`/categories/${id}/items`)}>{name}</div>
  </Container>
)

export default Category
