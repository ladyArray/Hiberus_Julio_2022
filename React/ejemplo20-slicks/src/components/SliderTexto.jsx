import React from 'react'
import Slider from 'react-slick'

function SliderTexto() {

    const configuracion = {
        className: 'center',
        dots: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 2000,
        infinite: true,
        centerMode: true,
        centerPadding: '60px'
    }

  return (
    <div>
        <Slider {...configuracion}>
            <div><h2>Texto 1</h2></div>
            <div><h2>Texto 2</h2></div>
            <div><h2>Texto 3</h2></div>
            <div><h2>Texto 4</h2></div>
            <div><h2>Texto 5</h2></div>
            <div><h2>Texto 6</h2></div>
            <div><h2>Texto 7</h2></div>
        </Slider>
    </div>
  )
}

export default SliderTexto