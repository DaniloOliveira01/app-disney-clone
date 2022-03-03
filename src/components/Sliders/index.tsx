/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable @typescript-eslint/no-unused-vars */
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

// STYLES
import { Carousel, Wrap } from './styles'

// IMAGES 

import SliderOne from '../../assets/image/slider-badag.jpg'
import SliderTwo from '../../assets/image/slider-badging.jpg'
import SliderTree from '../../assets/image/slider-scale.jpg'
import SliderFor from '../../assets/image/slider-scales.jpg'



export function Sliders() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }


  return (
      <Carousel {...settings}>
        <Wrap>
          <a>
            <img src={SliderOne} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src={SliderTwo} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src={SliderTree} alt="" />
          </a>
        </Wrap>

        <Wrap>
          <a>
            <img src={SliderFor} alt="" />
          </a>
        </Wrap>
      </Carousel>
  )
}