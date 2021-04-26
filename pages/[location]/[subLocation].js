import { useRouter } from 'next/router';
import locationData from '@/data/data.json';
import Carousel from '@/components/Carousel';
import Image from 'next/image'

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

  return (
    <div className="flex flex-col items-center text-navy justify-center pb-5">
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
          {currentSubPage.postTitle}
        </h1>
        <div class="grid lg:grid-cols-3 gap-4 sm:grid-cols-1">
          <div className="bg-navy text-white p-4 text-left">
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
      </div>

      <div className="p-9 dark:text-white">
        {currentSubPage.postList
          ? currentSubPage.postList.map((place, idx) => (
              <div className="justify-center py-3" key={idx}>
                <h2 className="text-center">{place.title}</h2>
                {place.image ? (
                  <Image
                    className="d-block w-100"
                    src="/portree.jpg"
                    alt={place.image}
                    width={750}
                    height={562}
                  />
                ) : null}

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
  );
}
