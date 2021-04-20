import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function ImageCarousel(props) {
  return (
      <Carousel fade>
        {props.images.map((image, idx) => {
          return (
            <Carousel.Item key={idx}>
              <Image
                className="d-block w-100"
                src={image.src}
                alt={image.alt}
                width={1000}
                height={750}
              />
              <Carousel.Caption>
                <h3>{image.header}</h3>
                <p>{image.caption} </p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
  );
}
