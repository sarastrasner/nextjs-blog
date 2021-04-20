import Carousel from '@/components/Carousel';
import Image from 'next/image';
import { UncontrolledCarousel, Row, Col } from 'reactstrap';

export default function Canada() {
  function Photo(altText, caption, header) {
    this.src = `/${altText}.jpg`;
    this.altText = altText;
    this.caption = caption;
    this.header = header;
    this.key = Math.random();
  }
  
  let canadaImages = [];
  function addPhoto (alt, caption, header){
    canadaImages.push(new Photo(alt, caption, header));
  }
  addPhoto("UBC", "Here is a caption", "UBC Museum");
  addPhoto("vanDusen", "caption2", "VanDusen Botanical Garden");
  addPhoto("whistler", "caption2", "Whistler Blackcomb");

  
  console.log(canadaImages[0].src)
  console.log(canadaImages)
  return (
    <>
      <div className="flex flex-col items-center justify-center dark:bg-navy">
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
            Beautiful British Columbia
          </h1>
          <Row>
        <Col md="8" className="mx-auto">
          <UncontrolledCarousel items={canadaImages} />
        </Col>
      </Row>
    
          {/* <p className="mt-3 text-2xl dark:text-gray-100">
            Where I've been and where I hope to go.
          </p> */}

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            <a
              href="https://nextjs.org/docs"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Vancouver &rarr;</h3>
              <p className="mt-4 text-xl">
                Delicious food, friendly people, and gorgeous scenery.
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Whistler &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>

            <a
              href="https://nextjs.org/learn"
              className="p-6 mt-6 text-left border w-96 rounded-xl hover:text-blue-600 focus:text-blue-600"
            >
              <h3 className="text-2xl font-bold">Victoria &rarr;</h3>
              <p className="mt-4 text-xl">
                Learn about Next.js in an interactive course with quizzes!
              </p>
            </a>
          </div>
        </main>
      </div>
    </>
  );
}
