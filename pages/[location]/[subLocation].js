import { useRouter } from 'next/router';

export default function Location(props) {
  const router = useRouter();
  const { location, subLocation } = router.query;

  if (!subLocation) return <p>Loading...</p>;

  return (
    <div className="flex flex-col items-center justify-center pb-5 dark:bg-navy">
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center text-navy">
        <h1 className="text-6xl m-6 font-bold dark:text-gray-100">
          {subLocation.charAt(0).toUpperCase() + subLocation.slice(1)} Content!
        </h1>
      </main>
    </div>
  );
}
