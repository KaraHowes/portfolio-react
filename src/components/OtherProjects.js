import React from 'react'
import styled from 'styled-components';

import Authentication from './OtherProjects/Authentication'
import HappyThoughts from './OtherProjects/HappyThoughts'
import NobelPrize from './OtherProjects/NobelPrize'
import ExpressNobelPrize from './OtherProjects/ExpressNobelPrize'
import HarryPotterQuiz from './OtherProjects/HarryPotterQuiz'

const Projects = styled.section`
background-color:white;
text-align: center;
width: 100%;
margin: 20px 0 30px 0;
padding: 20px;
`
const ProjectContainer = styled.article`
display: flex;
  flex-direction: column;
  margin: 30px auto 0 auto;
  text-align: center;
  width: 90%;
  @media (min-width: 950px){
    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  }`

const OtherProjects = () => {
  return (
    <Projects>
      <ProjectContainer>
        <Authentication />
        <HappyThoughts />
        <NobelPrize />
        <ExpressNobelPrize />
        <HarryPotterQuiz />
      </ProjectContainer>
    </Projects>
  );
};

export default OtherProjects