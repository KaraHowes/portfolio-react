import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Movies = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://cinema-movies-site.netlify.app/"
        aria-label="link to deployed Movies app"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Movie-Releases</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      A multi-page React app showing the 50 most popular movies in US Cinemas.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/Fatima-GR/project-movies"
        aria-label="Link to Movies App on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>JavaScript</Methods>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>React Router</Methods>
        <Methods>Props</Methods>
        <Methods>CSS</Methods>
        <Methods>Pair-programming</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default Movies;