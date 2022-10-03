import React from 'react'
import styled from 'styled-components';

import ThekFriends from './FeaturedProjects/ThekFriends'
import ToDo from './FeaturedProjects/ToDo'
import Labyrinth from './FeaturedProjects/Labyrinth'

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

const FeaturedProjects = () => {
  return (
    <Projects>
      <ProjectContainer>
        <ThekFriends />
        <ToDo />
        <Labyrinth />
      </ProjectContainer>
    </Projects>
  );
};

export default FeaturedProjects

