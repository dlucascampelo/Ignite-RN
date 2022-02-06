import React from 'react';
import { BackBtn } from '../../components/BackBtn';
import { ImageSlider } from '../../components/ImageSlider';

import {
  Container,
  Header,
  ImagesWrapper,

} from './styles';

export function CarDetails() {
  return (
    <Container>

      <Header>
        <BackBtn onPress={() => { }} />
      </Header>

      <ImagesWrapper>
        <ImageSlider
          imagesUrl={['https://www.pngmart.com/files/1/Audi-RS5-Red-PNG.png']} />
      </ImagesWrapper>

    </Container>
  );
}