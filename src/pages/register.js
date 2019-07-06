import React, { useState } from "react"
import { Auth } from 'aws-amplify';
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

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async (e) => {
    e.preventDefault();
    try {
      await Auth.signUp({
        username: email,
        password,
        attributes: {
          email
        }
      });
    } catch(error) {
      alert('No se pudo crear la cuenta');
    }
  }

  return (
    <Page>
      <div className="logo">
        <Logo width="150" height="100" />
      </div>
      <LoginForm>
        <Input type="text" placeholder="EMAIL" onChange={ event => setEmail(event.target.value)} />
        <Input type="password" placeholder="CONTRASEÑA" onChange={ event => setPassword(event.target.value)} />
        <Input type="address" placeholder="DIRECCION" />
        <PrimaryButton onClick={login}>CREAR CUENTA</PrimaryButton>
      </LoginForm>
    </Page>
  )
}

export default LoginPage
