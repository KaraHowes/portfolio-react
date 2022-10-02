import React from 'react';
import styled from 'styled-components';

import { Title } from './generalstyling'

const StyleFooter = styled.footer`
  width: 100%;
  height: 400px;
  text-align: center;
  margin: 0 auto;
`;

const ContactContainer = styled.section`
  align-items: center;
  line-height: 1.5;
  margin-top: 30px;
`;

const ContactWrapper = styled.div`
  margin-top: 40px;
`;
const SubText = styled.h4`
  font-size: 1.75rem;
  font-weight: 600;
`;
const Footer = () => {
  return (
    <StyleFooter>
      <ContactContainer>
        <Title>CONTACT</Title>
        <ContactWrapper>
          <SubText> Kara Howes</SubText>
          <SubText>karahowes1@gmail.com</SubText>
          <SubText>+41 78 923 77 50</SubText>
        </ContactWrapper>
      </ContactContainer>
    </StyleFooter>
  );
};

export default Footer;
