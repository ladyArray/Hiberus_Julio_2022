import React from 'react'
import Slider from 'react-slick'

function SliderImagenesFade() {

    const configuracion = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        fade:true
    }

  return (
    <div>
        <Slider {...configuracion}>
            <div>
              <img src="https://picsum.photos/200/300?random=1" alt="imagen 1" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300?random=2" alt="imagen 2" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300?random=3" alt="imagen 3" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300?random=4" alt="imagen 4" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300?random=5" alt="imagen 5" />
            </div>
            <div>
              <img src="https://picsum.photos/200/300?random=6" alt="imagen 6" />
            </div>
        </Slider>
    </div>
  )
}

export default SliderImagenesFade