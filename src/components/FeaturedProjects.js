import React from 'react'
import styled from 'styled-components';

import { FeaturedCard } from './generalstyling'

const Projects = styled.section`
`
const ProjectContainer = styled.article`
display: flex;
  flex-direction: column;
  margin: 30px auto 0 auto;
  text-align: center;
  width: 90%;
  @media (min-width: 950px){
    display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  }`

const NetlifyLink = styled.a`
  text-decoration: none;
  color: black;
  cursor: pointer;`

const CardProjectImg = styled.img`
  width: 100%;`;
const ProjectTitle = styled.h4`
margin: 10px 0;`
const ProjectParagraph = styled.p`
margin: 10px 0;
font-size: 1.25rem;
line-height: 1.25;`

const FeaturedProjects = () => {
  return (
    <Projects>
      <ProjectContainer>
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
            My final project at Technigo: a full-stack resource (Frontend:
            React, React Router and Redux, Backend: Node.js, MongoDB and
            Mongoose). Built as a solo-project, the idea was to build a platform
            for the donation of SchulTheks (Swiss-German Schoolbag).
          </ProjectParagraph>
          <a
            href="https://github.com/KaraHowes/project-final-kh"
            aria-label="Link to final project on github"
            target="_blank"
            rel="noopener noreferrer"
            className="social-top">
            <i className="fab fa-github" />
          </a>
          <div className="tag-wrapper">
            <p>React</p>
            <p>JSX</p>
            <p>Redux</p>
            <p>React Router</p>
            <p>Node express</p>
            <p>MongoDB</p>
            <p>Mongoose</p>
            <p>Nodemailer</p>
            <p>Styled Components</p>
            <p>Lottie Animations</p>
            <p>SweetAlert</p>
            <p>Adobe Illustrator</p>
          </div>
        </FeaturedCard>
      </ProjectContainer>
    </Projects>
  );
};

export default FeaturedProjects

