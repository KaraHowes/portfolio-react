import styled from 'styled-components'

export const Title = styled.h3`
font-weight: 700;
font-size: 2rem;
border: solid 5px #FB33DB;
padding: 10px;
display: inline;`

export const FeaturedCard = styled.article`
margin: 40px auto;
padding: 30px;
justify-items: center;
background-color: whitesmoke;
width: 100%;
border: 5px solid black;
@media (min-width: 950px){
    width: 40%;
  }`

export const Link = styled.a`
cursor: pointer;
margin: 0 10px;
font-family: "Font Awesome 5 Brands";
font-size: 3rem;
color: black;
`
export const MethodList = styled.div`
margin: 10px 0;
display: flex;
flex-direction: row;
flex-wrap: wrap;`
export const Methods = styled.p`
padding: 3px 6px;
margin: 5px;
font-size: 1rem;
background-color: yellow;
display: inline;`

export const NetlifyLink = styled.a`
text-decoration: none;
color: black;
cursor: pointer;`

export const CardProjectImg = styled.img`
width: 100%;`;

export const ProjectTitle = styled.h4`
margin: 10px 0;
font-size: 1.75rem;`

export const ProjectParagraph = styled.p`
margin: 10px 0;
font-size: 1.25rem;
line-height: 1.25;`

export const GithubLink = styled.a`
cursor: pointer;
margin: 0 10px;
font-family: "Font Awesome 5 Brands";
font-size: 3rem;
color: black;`
