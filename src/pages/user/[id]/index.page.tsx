import { useRouter } from 'next/router';

export default function UserPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>User: {id}</div>;
}
