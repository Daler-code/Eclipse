import React from 'react';
import ReactPlayer from 'react-player';

import {
  Container,
  Heading
} from './styles';

import './styles.css';

const AboutUsVideoSection = () => {
  return (
    <Container>
      <Heading>About<span>TheDevs</span></Heading>
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='http://www.youtube.com/watch?v=0fv4D9t3tCI'
          width='100%'
          height='100%'
          origin='http://localhost:3000'
        />
      </div>
    </Container>
  )
};

export default AboutUsVideoSection;