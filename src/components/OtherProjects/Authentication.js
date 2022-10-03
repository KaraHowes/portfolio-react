import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Authentication = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://lena-linnea-kara-authentication.netlify.app"
        aria-label="link to deployed Authentication app"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Authentication</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      Fullstack pair-project which allows access of
      restricted content to authenticated users.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-auth"
        aria-label="Link to Authentication app on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>JavaScript</Methods>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>Redux</Methods>
        <Methods>React Router</Methods>
        <Methods>CSS</Methods>
        <Methods>Node.js</Methods>
        <Methods>MongoDB</Methods>
        <Methods>Mongoose</Methods>
        <Methods>Pair-programming</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default Authentication;