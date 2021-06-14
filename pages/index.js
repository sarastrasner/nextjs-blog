import Head from 'next/head';
import locationData from '@/data/data.json';
import Link from 'next/link';
import Image from 'next/image';

export const getStaticProps = async () => {
  return {
    props: {
      locationData,
    },
  };
};

export default function Home(data) {
  data.locationData.map(place => {
    <Link href={`/${place.title}`}></Link>;
    place.subPages.map(subPage => {
      <Link href={`/${place.title}/${subPage.name}`}></Link>;
    });
  });

  return (
    <>
      <div className="min-h-screen py-4 flex flex-col items-center justify-center">
        <Head>
          <title>Strassy Travels</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl font-bold pb-4 dark:text-gray-100">
            Strassy Travels
          </h1>
          <Image
            className="d-block w-100"
            src="/arches.jpg"
            alt="A photo of me in Arches National Park"
            width={750}
            height={562}
          />
          <div className="m-3 dark:text-gray-100">
            <p>
              Hello, and welcome to my website! I'm Sara Strasner and as a
              born-and-raised Southerner I feel like I should offer you a
              beverage to fully welcome you to my lil' website. I was born and
              raised in Louisiana and have since lived in Seattle and Colorado.
              When moving from Seattle to Colorado, my husband and I did an epic
              roadtrip and saw a few National Parks along the way, including
              Arches National Park (above). I often spend hours and hours
              researching and planning trips, so hopefully you can benfit from
              my love of planning.
            </p>
            <p>
              👩‍💻 When not traveling, you can find me: 🏃‍♀️ running 🏃‍, 🍪 baking
              🍪, or ✏️doing a crossword puzzle.✏️
            </p>
          </div>
        </main>
      </div>
    </>
  );
}
