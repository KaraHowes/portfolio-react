import React from 'react';
import styled from 'styled-components';

const BioContainer = styled.article`
  background-color: white;
  text-align: center;
  width: 90%;
  margin: 10px auto 30px auto;
  padding: 10px 0 30px 0;
`;

const BioText = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 90%;
  max-width: 900px;
  margin: 20px auto 0 auto;
  padding: 10px;
`;

const Paragraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  margin-top: 20px;
`;

const Bio = () => {
  return (
    <BioContainer>
      <BioText>
        <Paragraph>
          I am curious, agile-thinking frontend developer with a PhD background
          in Chemistry. I love solving problems with pragmatic solutions to
          build beautiful websites. I am passionate about learning and
          skill-acquisition. My goal is to be the best version of myself, both
          professionally and personally.
        </Paragraph>
      </BioText>
    </BioContainer>
  );
};

export default Bio;
