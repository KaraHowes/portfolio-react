import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const NobelPrize = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://nobel-prize-mongo.herokuapp.com/"
        aria-label="Link to deployed Nobel Prize API"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Nobel Prize API</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      A RESTFUL Nobel-prize winners list, using Mongoose
      methods to interact with the data.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-mongo-api"
        aria-label="Link to Nobel Prize app on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>MongoDB</Methods>
        <Methods>Mongoose</Methods>
        <Methods>RESTful API</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default NobelPrize;