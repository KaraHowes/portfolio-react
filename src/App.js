import React from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Bio from './components/Bio';
import TechSkills from './components/TechSkills';
import FeaturedProjects from './components/FeaturedProjects'
import AllSkills from './components/AllSkills';
import SocialContact from './components/SocialContact'

export const App = () => {
  return (
    <div>
      <Header />
      <Bio />
      <TechSkills />
      <FeaturedProjects />
      <AllSkills />
      <SocialContact />
      <Footer />
    </div>
  );
};
