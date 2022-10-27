import { useRouter } from 'next/router';

export default function ProjectDetail() {
	const router = useRouter();
	const id = router.query.id as string;

	return <div> to je twoj ewr: {id}</div>;
}
