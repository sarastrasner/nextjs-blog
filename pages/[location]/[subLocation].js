import { useRouter } from 'next/router';

export default function Location(props) {
  const router = useRouter();
  const { location, subLocation } = router.query;

  if (!subLocation) return <p>Loading...</p>
  
  return (
    <h1>
      {subLocation.charAt(0).toUpperCase() + subLocation.slice(1)} Content!
    </h1>
  );
}
