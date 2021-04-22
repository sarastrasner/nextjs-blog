import { useRouter } from 'next/router';
import locationData from '@/data/data.json';
import Carousel from '@/components/Carousel';

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
  let currentSubPage;
  if (!subLocation) return <p>Loading...</p>;

  const getData = () => {
    let currentLocation = props.locationData.filter(
      place => place.title === location
    )[0];
    currentSubPage = currentLocation.subPages.filter(
      page => page.name === subLocation
    )[0];
    console.log(currentSubPage);
  };
  getData();

  return (
    <div className="flex flex-col items-center justify-center pb-5">
      <div className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
        <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
          {subLocation.charAt(0).toUpperCase() + subLocation.slice(1)} Content!
        </h1>
        {currentSubPage.images ? (
          <Carousel images={currentSubPage.images} />
        ) : null}
      </div>
    </div>
  );
}
