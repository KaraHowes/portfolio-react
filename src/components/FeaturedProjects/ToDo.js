import React from 'react'
import { FeaturedCard, MethodList, Methods, NetlifyLink, CardProjectImg, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const Todo = () => {
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
        <ProjectTitle> A To-do Project</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
        A To-do app was built using React and Redux, with local storage
        implemented so that the user does not loose their to-dos when the page
        reloads. The user can delete the tasks when completed. Inspired by an
        Andy Warhol print.
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
        <Methods>Styled Components</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default Todo;