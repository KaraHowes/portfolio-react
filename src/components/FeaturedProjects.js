import React from 'react'
import styled from 'styled-components';

import { Title, ProjectContainer } from './generalstyling'

import ThekFriends from './FeaturedProjects/ThekFriends'
import ToDo from './FeaturedProjects/ToDo'
import Labyrinth from './FeaturedProjects/Labyrinth'
import GitHubTracker from './FeaturedProjects/GitHubTracker'

const Projects = styled.section`
background-color:white;
text-align: center;
width: 100%;
margin: 20px 0 30px 0;
padding: 20px;
`

const FeaturedProjects = () => {
  return (
    <Projects>
      <Title>FEATURED PROJECTS</Title>
      <ProjectContainer>
        <ThekFriends />
        <ToDo />
        <Labyrinth />
        <GitHubTracker />
      </ProjectContainer>
    </Projects>
  );
};

export default FeaturedProjects

