import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

function Photo(altText, caption, header) {
  this.src = `/${altText}.jpg`;
  this.altText = altText;
  this.caption = caption;
  this.header = header;
  this.key = Math.random();
}

let images = [];
function addPhoto(alt, caption, header) {
  images.push(new Photo(alt, caption, header));
}

export default function ImageCarousel(props) {
  props.images.forEach(image => {
    addPhoto(image.altText, image.caption, image.header);
  });

  if (!images.length) return <p>meow!No images!</p>;

  return (
    <Carousel fade>
      {images.map((image, idx) => {
        return (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={image.src}
              alt={image.alt}
              // width={750}
              // height={562}
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
