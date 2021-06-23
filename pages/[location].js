import locationData from '@/data/data.json';
import Carousel from '@/components/Carousel';
import { useRouter } from 'next/router';
import Head from 'next/head';

export function getStaticPaths() {
  return { paths: [], fallback: true };
}

export async function getStaticProps() {
  return {
    props: {
      locationData,
    },
  };
}

const toTitleCase = phrase => {
  return phrase
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

export default function Location(props) {
  const router = useRouter();
  const { location } = router.query;

  if (!props.locationData) return <p>Loading...</p>;

  let currentLocation = props.locationData.filter(
    place => place.title === location
  )[0];

  let title = toTitleCase(currentLocation.title);

  return (
    <>
      <div className="flex flex-col items-center justify-center pb-5">
      <Head>
          <title>
            Strassy Travels | {title}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
          <h1 className="text-6xl m-6 font-bold dark:text-gray-100">{title}</h1>

          <Carousel images={currentLocation.images} />

          <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
            {currentLocation.subPages.map((item, idx) => {
              return (
                <a
                  key={idx}
                  href={`/${currentLocation.title}/${item.name}`}
                  className="p-6 mt-6 text-left border dark:text-white w-96 rounded-xl"
                >
                  <h3 className="text-2xl dark:text-white text-green font-bold">
                    {item.longName
                      ? item.longName.charAt(0).toUpperCase() +
                        item.longName.slice(1)
                      : item.name.charAt(0).toUpperCase() +
                        item.name.slice(1)}{' '}
                    &rarr;
                  </h3>
                  <p className="mt-4 text-green dark:text-white text-xl">
                    {item.blurb}
                  </p>
                </a>
              );
            })}
          </div>
        </main>
      </div>
    </>
  );
}
