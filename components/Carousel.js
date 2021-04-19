import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';

export default function ImageCarousel(props) {
  console.log(props.images);
  console.log(props.images[0].props);

  return (
    //<p>Please work!</p>
    <Carousel fade>
      {props.images.map(image => {
        <Carousel.Item>
          <Image
            className="d-block w-100"
            src={image.props.src}
            alt="hello!"
            width={1000}
            height={500}
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>;
      })}
    </Carousel>
  );
}
