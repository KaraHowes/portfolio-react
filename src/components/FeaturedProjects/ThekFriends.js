import React from 'react'

import { FeaturedCard, MethodList, Methods, NetlifyLink, CardProjectImg, ProjectTitle, ProjectParagraph, GithubLink } from '../generalstyling'

const ThekFriends = () => {
  return (
    <FeaturedCard>
      <NetlifyLink
        href="https://thek-friends.netlify.app/"
        aria-label="link to Thek-Friends project"
        target="_blank"
        rel="noopener noreferrer">
        <CardProjectImg
          src="./assets/thek-friends-mock.png"
          alt="Thek-Friends final project displayed on macbook and iphone" />
        <ProjectTitle> Thek-Friends</ProjectTitle>
      </NetlifyLink>
      <ProjectParagraph>
        My final project at Technigo: a full-stack resource (Frontend: React,
        React Router and Redux, Backend: Node.js, MongoDB and Mongoose). Built
        as a solo-project, the idea was to build a platform for the donation of
        SchulTheks (Swiss-German Schoolbag).
      </ProjectParagraph>
      <GithubLink
        href="https://github.com/KaraHowes/project-final-kh"
        aria-label="Link to final project on github"
        target="_blank"
        rel="noopener noreferrer">
        <i className="fab fa-github" />
      </GithubLink>
      <MethodList>
        <Methods>React</Methods>
        <Methods>JSX</Methods>
        <Methods>Redux</Methods>
        <Methods>React Router</Methods>
        <Methods>Node express</Methods>
        <Methods>MongoDB</Methods>
        <Methods>Mongoose</Methods>
        <Methods>Nodemailer</Methods>
        <Methods>Styled Components</Methods>
        <Methods>Lottie Animations</Methods>
        <Methods>SweetAlert</Methods>
        <Methods>Adobe Illustrator</Methods>
      </MethodList>
    </FeaturedCard>
  );
};
export default ThekFriends;