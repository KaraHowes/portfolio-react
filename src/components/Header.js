import React from 'react';
import styled from 'styled-components';

import { Link } from './generalstyling'

const HeaderContainer = styled.header`
  position: relative;
  left: 0;
  top: 0;
  width: 100%;
  height: 500px;
  background: -webkit-linear-gradient(
      rgba(135, 60, 255, 1),
      rgba(135, 60, 255, 0) 0%
    ),
    -webkit-linear-gradient(-45deg, rgba(135, 141, 247, 0.9) 45%, rgba(
            55,
            230,
            235,
            1
          )
          0%);
  border-bottom: solid 10px yellow;
`;
const ProfileContainer = styled.section`
  position: absolute;
  top: 10%;
  left: 10%;
  right: 10%;
  height: 500px;
  display: flex;
  max-width: 1000px;
  margin: 0 auto;
`;
const NavContainer = styled.nav`
  position: absolute;
  height: 80%;
  right: 0;
  display: inline-flex;
`;
const TextContainer = styled.div`
  letter-spacing: 0.04em;
  position: absolute;
  max-width: 100%;
  position: absolute;
  top: 26%;
  height: auto;
`;
const MainTitle = styled.p` 
font-weight: 800;
font-size: 1.25rem;
margin: 25px 0;`
const SubTitle1 = styled.h1`
width: 230px;
font-weight: 700;
font-size: 40px;
line-height: 50px;
margin-top: 15px;
@media (min-width: 950px){
  width: 400px;
  font-weight: 700;
  font-size: 80px;
  font: 80px;
  line-height: 80px;
}
`;
const SubTitle2 = styled.h2`
  font-weight: 700;
  margin-top: 10px;
  font-size: 16px;
  @media (min-width: 950px){
    font-weight: 700;
    margin-top: 10px;
    font-size: 32px;
  }
`;
const ProfileImageContainer = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  right: 0;
  bottom: 1%;
  background-image: url(./assets/profile.jpeg);
  background-repeat: no-repeat;
  object-fit: cover;
  background-position: center right;
  background-size: cover;
  border-radius: 50%;
  z-index: 3;
  @media (min-width: 950px){
    font-size:1.75rem;
    width: 210px;
    height: 210px;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <ProfileContainer>
        <NavContainer>
          <Link
            href="https://linkedin.com/in/karahowes"
            aria-label="link to Linked-in  profile"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
          </Link>
          <Link
            href="https://github.com/KaraHowes"
            aria-label="Link to Github account"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github" />
          </Link>
          <Link
            href="https://stackoverflow.com/users/16680893/karahowes"
            aria-label="link to stackoverflow profile"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-stack-overflow" />
          </Link>
        </NavContainer>

        <TextContainer>
          <MainTitle>KARA HOWES: PORTFOLIO </MainTitle>
          <SubTitle1> Frontend Developer </SubTitle1>
          <SubTitle2> + PhD Chemistry</SubTitle2>
        </TextContainer>

        <ProfileImageContainer />
      </ProfileContainer>
    </HeaderContainer>
  );
};

export default Header;
