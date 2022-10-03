import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, CardProjectImg, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Labyrinth = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://https://kara-howes-todos.netlify.app-friends.netlify.app/"
        aria-label="link to to-do project"
        target="_blank"
        rel="noopener noreferrer">
        <CardProjectImg
          src="./assets/to-do-mockup.png"
          alt="To-do project displayed on macbook" />
        <ProjectTitle> Labyrinth Game</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      This pair-project involved building a Labyrinth game app using React and Redux,
      fetching data from an API.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-todos"
        aria-label="Link to to-do project on github"
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
export default Labyrinth;