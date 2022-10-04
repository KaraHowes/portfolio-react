import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const GuessWho = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://kh-guess-who.netlify.app/"
        aria-label="link to deployed Guess-who game"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Guess Who?!</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      The Classic Game brought to the web.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-guess-who"
        aria-label="Link to Guess-who game on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>HTML</Methods>
        <Methods>CSS</Methods>
        <Methods>Vanilla JavaScript</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default GuessWho;