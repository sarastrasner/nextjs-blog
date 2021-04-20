import { UncontrolledCarousel, Row, Col } from 'reactstrap';

export default function Ireland() {
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
  addPhoto('guinness', 'Here is a caption', 'The Guinness Experience');
  addPhoto('dunquin', 'caption2', 'Dunquin Pier');
  addPhoto('moher', 'caption2', 'The Cliffs of Moher');

  let contentBlocks = [
    { name: 'dublin', blurb: 'Top 10 things to do in Dublin' },
    { name: 'galway', blurb: 'My favorite city in Ireland' },
    {
      name: 'dingle',
      longName: 'The Dingle Peninsula',
      blurb: 'Quaint, charming, and quintessentially Ireland.',
    },
  ];

  return (
    <>
      <div className="flex flex-col items-center justify-center dark:bg-navy">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
            Ireland: The Emerald Isles
          </h1>
          <Row>
            <Col md="8" className="mx-auto">
              <UncontrolledCarousel items={images} />
            </Col>
          </Row>

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {contentBlocks.map(item => {
              return (
                <a
                  href={`/ireland/${item.name}`}
                  className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-green-600 focus:text-green-600"
                >
                  <h3 className="text-2xl text-green font-bold">
                    {item.longName
                      ? item.longName.charAt(0).toUpperCase() +
                        item.longName.slice(1)
                      : item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                      {' '}&rarr;
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
