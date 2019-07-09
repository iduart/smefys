import React, { useState, useEffect } from "react"
import { Auth } from 'aws-amplify';
import { Link, navigate } from 'gatsby';
import styled from "styled-components"
import { Logo, UserAvatarIcon, FacebookIcon } from "../Icons"
import { Input } from "../Input/Input"
import { PrimaryButton } from "../Button/Button"
import { authStatus } from '../../utils/constants';

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
      margin-bottom: 1rem;
    }
  }

  button {
    margin-top: 3rem;
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

const LoginPage = ({ authState, ...props }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (authState === authStatus.SIGNED_IN) {
      navigate('/categories')
    } else {
      navigate('/')
    }
  }, [authState])

  const login = async (e) => {
    e.preventDefault();
    try {
      await Auth.signIn(email, password);
      navigate('/categories');
    } catch(error) {
      alert('No se pudo loguear, por favor revisa tus credenciales');
    }
  }

  return !(authState === authStatus.SIGNED_IN) ? (
    <Page>
      <div className="logo">
        <Logo width="150" height="100" />
      </div>
      <div className="user-icon">
        <UserAvatarIcon />
      </div>
      <LoginForm>
        <Input type="text" placeholder="EMAIL" onChange={ event => setEmail(event.target.value)} />
        <Input type="password" placeholder="CONTRASEÑA" onChange={ event => setPassword(event.target.value)} />
        <PrimaryButton onClick={login}>ENTRAR</PrimaryButton>
      </LoginForm>
      <Footer>
        No tienes cuenta? <Link to="/register">Crear una gratis</Link>
        <FacebookIcon />
      </Footer>
    </Page>
  ) : null
}

export default LoginPage
