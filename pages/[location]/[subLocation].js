import { useRouter } from 'next/router';
import locationData from '@/data/data.json';
import Carousel from '@/components/Carousel';
import Image from 'next/image';
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

export default function Location(props) {
  const router = useRouter();
  const { location, subLocation } = router.query;
  if (!subLocation) return <p>Loading...</p>;

  let currentLocation = props.locationData.filter(
    place => place.title === location
  )[0];

  let currentSubPage = currentLocation.subPages.filter(
    page => page.name === subLocation
  )[0];

  const toTitleCase = phrase => {
    return phrase
      .toLowerCase()
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  let regionTitle = toTitleCase(currentLocation.title);
  let subRegionTitle = toTitleCase(subLocation);

  return (
    <div className="flex flex-col items-center text-navy justify-center pb-5">
      <div className="flex flex-col items-center justify-center flex-1 lg:px-20 text-center">
        <Head>
          <title>
            Strassy Travels | {subRegionTitle}, {regionTitle}
          </title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
          {currentSubPage.postTitle}
        </h1>
        <p className="dark:text-gray-100">{currentSubPage.postBlurb}</p>
        <div className="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
          <div className="bg-navy dark:bg-green text-white p-4 text-left">
            <h2 className="m-0 text-center">
              {subLocation.charAt(0).toUpperCase() + subLocation.slice(1)} at a
              Glance
            </h2>
            <ul className="list-disc list-inside">
              {currentSubPage.postList.map((item, idx) => (
                <li key={idx}>
                  {item.shortTitle ? item.shortTitle : item.title}
                </li>
              ))}
            </ul>
          </div>
          {currentSubPage.images ? (
            <div className="col-span-2">
              <Carousel images={currentSubPage.images} />
            </div>
          ) : null}
        </div>

        <div className="p-9 dark:text-white">
          {currentSubPage.postList
            ? currentSubPage.postList.map((place, idx) => (
                <div className="max-w-4xl justify-center py-3" key={idx}>
                  {place.image ? (
                    <div className="mb-2">
                      <img
                        className="d-block w-100"
                        src={`/${place.image}.jpg`}
                        alt={place.image}
                        // width={750}
                        // height={562}
                      />
                    </div>
                  ) : null}
                  <h2 className="text-center">
                    {place.type}
                    {place.title}
                  </h2>
                  <p>{place.content}</p>
                  {place.tip ? (
                    <p>
                      <strong>Tip: </strong>
                      {place.tip}
                    </p>
                  ) : null}
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
}
