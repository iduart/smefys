import React, { useState } from "react"
import { Auth } from 'aws-amplify';
import queryString from 'query-string';
import { Link, navigate } from 'gatsby'
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
  color: #7C7C7C;

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
`;

const Footer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;

  a {
    color: #7C7C7C;
    margin-bottom: 1.8rem;
    text-decoration: underline;
  }
`;

const ConfirmationMessage = styled.div`
  text-align: center;
  margin-top: 1rem;
`

const VerifyAccountPage = ({ location }) => {
  const [code, setCode] = useState('');
  const query = queryString.parse(location.search)
  const { username } = query;

  const verify = async (e) => {
    e.preventDefault();

    if (!username || !code) {
      alert('No se encontró un nombre de usuario o codigo para verificar');
      return;
    }
    try {
      await Auth.confirmSignUp(username, code);
      navigate('/', { hola: 'mindo '})
    } catch(error) {
      alert('Codigo no valido');
    }
  }

  return (
    <Page>
      <div className="logo">
        <Logo width="150" height="100" />
      </div>
      <ConfirmationMessage>
        Un código de confirmación fue enviado al correo <b>{username}</b>
      </ConfirmationMessage>
      <LoginForm>
        <Input type="text" placeholder="CÓDIGO" onChange={ event => setCode(event.target.value)} />
        <PrimaryButton onClick={verify}>ENVIAR</PrimaryButton>
      </LoginForm>
      <Footer>
        Ya tienes cuenta?<Link to="/"> Ingresa</Link>
      </Footer>
    </Page>
  )
}

export default VerifyAccountPage
