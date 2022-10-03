import React from 'react';
import styled from 'styled-components'

import Header from './components/Header';
import Footer from './components/Footer';
import Bio from './components/Bio';
import TechSkills from './components/TechSkills';
import FeaturedProjects from './components/FeaturedProjects'
import AllSkills from './components/AllSkills';
import SocialContact from './components/SocialContact'

const ContentContainer = styled.section`
max-width: 1500px;
margin: 0 auto;`

export const App = () => {
  return (
    <div>
      <Header />
      <ContentContainer>
        <Bio />
        <TechSkills />
        <FeaturedProjects />
        <AllSkills />
        <SocialContact />
      </ContentContainer>
      <Footer />
    </div>
  );
};
