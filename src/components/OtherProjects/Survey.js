import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Survey = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://karahowes-survey.netlify.app/"
        aria-label="link to deployed React-Survey app"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> From the Mouths of Babes- React Survey</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      My Children asked the questions, I coded it. First foray using
      State with React, includes a progress bar
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-survey"
        aria-label="Link to React-survey App on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>JavaScript</Methods>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>React State</Methods>
        <Methods>Props</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default Survey;