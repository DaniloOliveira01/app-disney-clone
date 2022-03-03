/* eslint-disable jsx-a11y/alt-text */

 // Styles

import { Container, Wrap } from "./styles";

// IMAGES 

import ViewOne from '../../assets/image/viewers-disney.png'
import ViewTwo from '../../assets/image/viewers-marvel.png'
import ViewTree from '../../assets/image/viewers-national.png'
import ViewFour from '../../assets/image/viewers-pixar.png'
import ViewFive from '../../assets/image/viewers-starwars.png'

export function View() {
  return (
    <Container>
      <Wrap>
        <img src={ViewOne} />
        <video autoPlay={true} loop={true} playsInline={true} >
          <source src="/videos/disney.mp4" type="video/mp4"/>
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewTwo} />
        <video autoPlay={true} loop={true} playsInline={true} >
          <source src="/videos/marvel.mp4" type="video/mp4"/>
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewTree} />
        <video autoPlay={true} loop={true} playsInline={true} >
          <source src="/videos/national.mp4" type="video/mp4"/>
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewFour} />
        <video autoPlay={true} loop={true} playsInline={true} >
          <source src="/videos/pixar.mp4" type="video/mp4"/>
        </video>
      </Wrap>

      <Wrap>
        <img src={ViewFive} />
        <video autoPlay={true} loop={true} playsInline={true} >
          <source src="/videos/star-wars.mp4" type="video/mp4"/>
        </video>
      </Wrap>
    </Container>
  );
}