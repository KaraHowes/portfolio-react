import React from 'react';
import styled from 'styled-components';

import { Title } from './generalstyling'

const SocialContainer = styled.section`
width: 90%;
text-align: center;
margin: 60px auto;
`
const SocialNav = styled.nav`
margin: 40px 0;
padding: 40px 0;
display: block;`

const NavLink = styled.a`
padding: 10px;
margin: 10px;
font-family: "Font Awesome 5 Brands";
font-size: 3.5rem;
color: black;`

const SocialContact = () => {
  return (
    <SocialContainer>
      <Title>FOR MORE</Title>
      <SocialNav>
        <NavLink
          href="https://linkedin.com/in/karahowes"
          aria-label="link to Linked-in  profile"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-linkedin" />
        </NavLink>
        <NavLink
          href="https://github.com/KaraHowes"
          aria-label="Link to Github account"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-github" />
        </NavLink>
        <NavLink
          href="https://stackoverflow.com/users/16680893/karahowes"
          aria-label="link to stackoverflow profile"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fab fa-stack-overflow" />
        </NavLink>
      </SocialNav>
    </SocialContainer>
  );
};
export default SocialContact;

