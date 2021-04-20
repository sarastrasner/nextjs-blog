import Carousel from 'react-bootstrap/Carousel';
import Image from 'next/image';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';

export default function ImageCarousel(props) {
  console.log(props.images);
  console.log(props.images[0].alt);
  let alt = props.images[0].alt;
  console.log(`"/${alt}.jpg"`);

  const items = [
    {
      src: '/UBC.jpg',
      altText: 'Slide 1',
      caption: '',
      header: '',
      key: '1',
    },
    {
      src: '/vanDusen.jpg',
      altText: 'Slide 2',
      caption: '',
      header: '',
      key: '2',
    }
  ];
  return (
    <>
      <Row>
        <Col md="8" className="mx-auto">
          <UncontrolledCarousel items={props.images} />
        </Col>
      </Row>
      {/* <Image src="/UBC.jpg" alt="me" width="500" height="500" /> */}
      {/* <Carousel fade>
        {props.images.map((image, idx) => {
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src="/vanDusen.jpg"
              alt={image.alt}
              width={1000}
              height={500}
            />
            <Carousel.Caption>
              <h3>{image.alt}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>;
        })}
      </Carousel> */}
    </>
  );
}
