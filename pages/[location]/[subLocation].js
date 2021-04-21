import { useRouter } from 'next/router';

export default function Location(props) {
  const router = useRouter();
  const { location, subLocation } = router.query;
  console.log(location, subLocation);
  return <h1>{subLocation} Content!</h1>;
}
