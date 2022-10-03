import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const ExpressNobelPrize = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://karas-nobelprize-frontend.netlify.app/"
        aria-label="Link to deployed Express Nobel Prize API"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Express Nobel Prize API</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      A RESTFUL Nobel-prize winners list built using
    Express with data generated from CSV.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-express-api"
        aria-label="Link to Nobel Prize Express API on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>Express</Methods>
        <Methods>JSON</Methods>
        <Methods>MongoDB</Methods>
        <Methods>Mongoose</Methods>
        <Methods>RESTful API</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default ExpressNobelPrize;