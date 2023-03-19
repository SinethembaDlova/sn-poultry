import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { Background, ReignSection, ReignText, ButtonWrapper, ReignButton } from './index.style';

const Reign = () => {
  return (
    <ReignSection>
      <Background />
      <Container>
        <MainHeading>Technology that reigns.</MainHeading>
        <ReignText>
          We provide the best technology solutions for clients all over the world
        </ReignText>
        <ButtonWrapper>
          <Link to="about">
            <Button>Find More</Button>
          </Link>
          <Link to="/contact">
            <ReignButton>Get In Touch</ReignButton>
          </Link>
        </ButtonWrapper>
      </Container>
    </ReignSection>
  );
};

export default Reign;
