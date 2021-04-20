import { UncontrolledCarousel, Row, Col } from 'reactstrap';
import Carousel from '@/components/Carousel'

export default function Canada() {
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
  addPhoto('UBC', 'Here is a caption', 'UBC Museum');
  addPhoto('vanDusen', 'caption2', 'VanDusen Botanical Garden');
  addPhoto('whistler', 'caption2', 'Whistler Blackcomb');

  let contentBlocks = [
    {
      name: 'vancouver',
      blurb: 'Delicious food, friendly people, and gorgeous scenery.',
    },
    { name: 'whistler', blurb: 'World-class skiing and breathtaking scenery.' },
    { name: 'victoria', blurb: 'Beautiful island.' },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-5 dark:bg-navy">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
            Beautiful British Columbia
          </h1>
          <Row>
            <Col md="8" className="mx-auto">
            <Carousel images={images} />
            </Col>
          </Row>

          {/* <p className="mt-3 text-2xl dark:text-gray-100">
            Where I've been and where I hope to go.
          </p> */}

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {contentBlocks.map(item => {
              return (
                <a
                  href={`/canada/${item.name}`}
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600"
                >
                  <h3 className="text-2xl text-green font-bold">
                    {item.longName
                      ? item.longName.charAt(0).toUpperCase() +
                        item.longName.slice(1)
                      : item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}{' '}
                    &rarr;
                  </h3>
                  <p className="mt-4 text-green text-xl">{item.blurb}</p>
                </a>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
