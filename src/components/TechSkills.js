import React from 'react';
import styled from 'styled-components';

import { Title } from './generalstyling'

const TechArticle = styled.article`
  background-color: white;
  text-align: center;
  width: 90%;
  margin: 10px auto 30px auto;
  padding: 10px 0 30px 0;
`;

const TechSkillsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const CodeSkills = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 20px auto 0 auto;
  padding: 10px;
`;

const CodeSkillsText = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 40px;
`;

const TechSkills = () => {
  return (
    <TechArticle>
      <Title>THE TECH</Title>
      <TechSkillsWrapper>
        <CodeSkills>
          <CodeSkillsText>
            HTML, CSS, Flexbox, JavaScript ES6, JSX, React, Redux, React Native,
            Node.JS, MongoDB, Web-accessibility, APIs, mob-programming,
            pair-programming, GitHub, Code Reviews.
          </CodeSkillsText>
        </CodeSkills>
      </TechSkillsWrapper>
    </TechArticle>
  );
};

export default TechSkills;
