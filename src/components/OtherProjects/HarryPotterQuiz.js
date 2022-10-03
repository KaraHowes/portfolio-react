import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const HarryPotterQuiz = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://redux-hippo-1.netlify.app"
        aria-label="link to deployed quiz app"
        target="_blank"
        rel="noopener noreferrer">
        <ProjectTitle> Harry Potter Quiz</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      A quiz built with React and Redux, with a confetti animation finale.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/JessicaNordahl/project-redux-quiz"
        aria-label="Link to react-redux on github"
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
        <Methods>Styled Components</Methods>
        <Methods>Mob-programming</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default HarryPotterQuiz;