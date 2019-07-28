import React, { useState } from "react"
import gql from "graphql-tag"
import { useMutation } from "react-apollo-hooks"
import { Auth } from "aws-amplify"
import { Link, navigate } from "gatsby"
import styled from "styled-components"
import { Logo } from "../components/Icons"
import { Input } from "../components/Input/Input"
import { PrimaryButton } from "../components/Button/Button"

const Page = styled.div`
  padding: 2rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-family: arial;
  color: #7c7c7c;

  .user-icon {
    margin-top: 1.2rem;
  }
`

const LoginForm = styled.form`
  display: flex;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 2rem;
  flex-flow: column nowrap;
  align-items: center;

  input {
    width: 100%;
    &:first-child {
      margin-top: 1rem;
    }
    margin-bottom: 1rem;
  }

  button {
    margin-top: 2rem;
  }
`

const Footer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  a {
    color: #7c7c7c;
    margin-bottom: 1.8rem;
    text-decoration: underline;
  }
`

const CREATE_USER = gql`
  mutation createUser($input: newUser!) {
    createUser(user: $input) {
      _id
      name
      email
    }
  }
`

const RegisterPage = props => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [createUser] = useMutation(CREATE_USER)

  const login = async e => {
    e.preventDefault()
    try {
      const authProviderUser = await Auth.signUp({
        username: email,
        password,
        attributes: {
          email,
        },
      })

      createUser({
        variables: {
          input: {
            identityProviderId: authProviderUser.userSub,
            name,
            phone,
            email,
            address,
          },
        },
      })

      navigate(`/verify-account?username=${email}`)
    } catch (error) {
      alert("No se pudo crear la cuenta")
    }
  }

  return (
    <Page>
      <div className="logo">
        <Logo width="150" height="100" />
      </div>
      <LoginForm>
        <Input
          type="text"
          placeholder="EMAIL"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          type="password"
          placeholder="CONTRASEÑA"
          onChange={event => setPassword(event.target.value)}
        />
        <br />
        <Input
          type="name"
          placeholder="NOMBRE"
          onChange={event => setName(event.target.value)}
        />
        <Input
          type="address"
          placeholder="DIRECCION"
          onChange={event => setAddress(event.target.value)}
        />
        <Input
          type="phone"
          placeholder="TELEFONO"
          onChange={event => setPhone(event.target.value)}
        />
        <PrimaryButton onClick={login}>CREAR CUENTA</PrimaryButton>
      </LoginForm>
      <Footer>
        Ya tienes cuenta?<Link to="/"> Ingresa</Link>
      </Footer>
    </Page>
  )
}

export default RegisterPage
