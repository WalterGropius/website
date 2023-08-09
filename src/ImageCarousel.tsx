import Slider from "react-slick";

const ImageCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <Slider {...settings}>
            {images.map((image, idx) => (
                <div key={idx}>
                    <img src={image} alt={`carousel-item-${idx}`} />
                </div>
            ))}
        </Slider>
    );
}

export default ImageCarousel;