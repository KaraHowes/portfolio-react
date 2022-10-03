import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const HappyThoughts = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://kara-happy-thoughts.netlify.app/"
        aria-label="link to deployed Happy-Thoughts app"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Happy Thoughts</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      Fullstack, Twitter-esque App spreading only positive vibes.
      You can fetch and post comments, like other comments and add your name.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-happy-thoughts"
        aria-label="Link to Happy-Thoughts app on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>JavaScript</Methods>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>Redux</Methods>
        <Methods>CSS</Methods>
        <Methods>Node.js</Methods>
        <Methods>MongoDB</Methods>
        <Methods>Mongoose</Methods>
        <Methods>Moment</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default HappyThoughts;