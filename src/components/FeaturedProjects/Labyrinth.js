import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, CardProjectImg, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Labyrinth = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://lena-kara-labyrinth.netlify.app/"
        aria-label="link to labyrinth project"
        target="_blank"
        rel="noopener noreferrer">
        <CardProjectImg
          src="./assets/kara-lab2 copy.png"
          alt="Labyrinth app displayed on macbook" />
        <ProjectTitle> Labyrinth Game</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
      This pair-project involved building a Labyrinth game app using React and Redux,
      fetching data from an API.
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-labyrinth"
        aria-label="Link to labyrinth project on github"
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