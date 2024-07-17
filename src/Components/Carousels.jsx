import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { list } from './Sliderdata';
import { FaQuoteRight } from "react-icons/fa";

const Carousels = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <section className="slick-container">
          
            <Slider {...settings}>
            {list.map((person) => {
                const { id, image, name, title, quote } = person;
                return (
                    <article className="slide" style={{
                        
                    }} key={id}>
                        <img src={image} art={name}
                            className="person-img" />
                        <h5 className="name">{name}</h5>
                        <p className="title">{title}</p>
                        <p className="text">{quote}`</p>
                        <FaQuoteRight className="icon" />
                    </article>)
            })}

            </Slider>
        </section>
    )
}

export default Carousels