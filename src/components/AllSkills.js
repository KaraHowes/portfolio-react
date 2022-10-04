import React from 'react';
import styled from 'styled-components';

import { Title } from './generalstyling'

const Projects = styled.section`
background-color:white;
text-align: center;
width: 100%;
margin: 20px 0 30px 0;
padding: 20px;`

const ListWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin: 50px auto 20px auto;
width: 100%;
justify-content: center;`

const Lists = styled.div`
width:100%;
display: block;
margin-block-start: 1em;
margin-block-end: 1em;
margin-inline-start: 0px;
margin-inline-end: 0px;
@media (min-width: 750px){
  width: 50%;
}
@media (min-width: 950px){
  width: 30%;
}`

const List = styled.ul`
display: block;
list-style-type: none;
line-height: 1.5;
font-size: 1.25rem;
margin-block-start: 1em;`

const Input = styled.li`
font-size: 1.5rem;
@media (min-width: 750px){
  font-size:1.75rem;
}
@media (min-width: 950px){
  font-size:2rem;
}`

const Subtitle = styled.h4`
font-size: 2rem;
font-weight: 700;
margin: 15px 0;`

const AllSkills = () => {
  return (
    <Projects>
      <Title>SKILLS</Title>
      <ListWrapper>
        <Lists>
          <Subtitle>Code</Subtitle>
          <List>
            <Input>HTML5</Input>
            <Input>CSS3</Input>
            <Input>JavaScript ES6</Input>
            <Input>React</Input>
            <Input>React Native</Input>
            <Input>Redux</Input>
            <Input>APIs</Input>
            <Input>Styled Components</Input>
            <Input>MongoDB</Input>
            <Input>Node.js</Input>
            <Input>Express</Input>
          </List>
        </Lists>
        <Lists>
          <Subtitle>Toolbox</Subtitle>
          <List>
            <Input>VS Code</Input>
            <Input>GitHub</Input>
            <Input>Terminal</Input>
            <Input>Postman</Input>
            <Input>MongoDB Compass</Input>
            <Input>MongoDB Atlas</Input>
            <Input>Heroku</Input>
            <Input>Web-accessibility</Input>
            <Input>Notion</Input>
            <Input>Slack</Input>
            <Input>Adobe Illustrator</Input>
            <Input>Figma</Input>
            <Input>Code Reviews</Input>
          </List>
        </Lists>
        <Lists>
          <Subtitle>Other</Subtitle>
          <List>
            <Input>Agile Methodology</Input>
            <Input>Mob-programming</Input>
            <Input>Pair-programming</Input>
            <Input>Powerpoint</Input>
            <Input>Organic Chemistry</Input>
            <Input>Nanoelectronics</Input>
          </List>
        </Lists>
      </ListWrapper>
    </Projects>
  );
};

export default AllSkills;
