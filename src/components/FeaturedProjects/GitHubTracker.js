import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, CardProjectImg, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const GitHubTracker = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://kara-howes-tracker.netlify.app/"
        aria-label="link to github tracker project"
        target="_blank"
        rel="noopener noreferrer">
        <CardProjectImg
          src="./assets/github-mockup.png"
          alt="gitHub tracker app displayed on macbook" />
        <ProjectTitle> GitHub Profile Tracker</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      This project involved using APIs to fetch data from
      the GitHub API and involved inputting into the innerHTML.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-github-tracker"
        aria-label="Link to gitbuh tracker on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>JavaScript</Methods>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>Redux</Methods>
        <Methods>APIs</Methods>
        <Methods>Thunks</Methods>
        <Methods>Styled Components</Methods>
        <Methods>Lottie Animations</Methods>
        <Methods>Pair-programming</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default GitHubTracker;