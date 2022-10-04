import React from 'react'
import styled from 'styled-components';

import { Title, ProjectContainer } from './generalstyling'

import Authentication from './OtherProjects/Authentication'
import HappyThoughts from './OtherProjects/HappyThoughts'
import NobelPrize from './OtherProjects/NobelPrize'
import ExpressNobelPrize from './OtherProjects/ExpressNobelPrize'
import HarryPotterQuiz from './OtherProjects/HarryPotterQuiz'
import Movies from './OtherProjects/Movies'
import Survey from './OtherProjects/Survey'
import GuessWho from './OtherProjects/GuessWho'

const Projects = styled.section`
background-color:white;
text-align: center;
width: 100%;
margin: 20px 0 30px 0;
padding: 20px;
`
const OtherProjects = () => {
  return (
    <Projects>
      <Title>OTHER PROJECTS</Title>
      <ProjectContainer>
        <Authentication />
        <HappyThoughts />
        <NobelPrize />
        <ExpressNobelPrize />
        <HarryPotterQuiz />
        <Movies />
        <Survey />
        <GuessWho />
      </ProjectContainer>
    </Projects>
  );
};

export default OtherProjects