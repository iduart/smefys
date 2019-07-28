import React, { useState } from "react"
import { connect } from "react-redux"
import styled from "styled-components"
import { Auth } from "aws-amplify"
import { Collapse } from "reactstrap"
import { LogoIcon, HamburgerIcon } from "../Icons"
import { Actions as AuthActions } from '../../store/auth';

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  height: 4rem;
  background-color: #ff8533;
  color: #ffffff;
  font-size: 1.4rem;
  align-items: center;
  padding-left: 0.5rem;
`

const ColorBlock = styled.div`
  background-color: ${props => props.color}
  width: 1.5rem;
  height: 100%;
`

const HeaderIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const HamburgerMenu = styled.div`
  padding: 1rem;
  background-color: #ccc;
  color: #ffffff;
  ul {
    padding: 0;
    margin: 0;

    li {
      padding: 0;
      margin: 0;
      list-style: none;
    }
  }
`

const PageHeader = (props) => {
  const [isOpen, setIsOpen] = useState(false)

  const signOut = () => {
    props.logout();
    Auth.signOut()
  }

  return (
    <>
      <Header>
        <HamburgerIcon onClick={() => setIsOpen(!isOpen)} />
        <HeaderIcon>
          <LogoIcon />
        </HeaderIcon>
        <ColorBlock color="#3A9517" />
        <ColorBlock color="#DE5B00" />
      </Header>
      <Collapse isOpen={isOpen}>
        <HamburgerMenu>
          <ul>
            <li onClick={signOut}>Logout</li>
          </ul>
        </HamburgerMenu>
      </Collapse>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(AuthActions.logout())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PageHeader)
