import React from 'react'
import Slider from 'react-slick'
import Item from './Item'

function SliderCustom() {

    const configuracion = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear"
    }

  return (
    <div>
        <Slider {...configuracion}>
            <Item texto="Texto 1" imagen="https://picsum.photos/200/300?random=1" />
            <Item texto="Texto 2" imagen="https://picsum.photos/200/300?random=2" />
            <Item texto="Texto 3" imagen="https://picsum.photos/200/300?random=3" />
            <Item texto="Texto 4" imagen="https://picsum.photos/200/300?random=4" />
            <Item texto="Texto 5" imagen="https://picsum.photos/200/300?random=5" />
            <Item texto="Texto 6" imagen="https://picsum.photos/200/300?random=6" />
            <Item texto="Texto 7" imagen="https://picsum.photos/200/300?random=7" />
        </Slider>
    </div>
  )
}

export default SliderCustom