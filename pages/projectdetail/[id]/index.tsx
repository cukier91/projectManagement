import { useRouter } from 'next/router';
import Link from 'next/link';

export default function ProjectDetail() {
	const router = useRouter();
	const id = router.query.id as string;

	return (
		<>
			<nav className="flex border-b border-gray-100 text-sm font-medium">
				<Link href={`${id}`}>
					<a className="-mb-px border-b border-current p-4 text-teal-600">
						Project details
					</a>
				</Link>

				<Link href={`${id}/timeline`}>
					<a className="-mb-px border-b border-transparent p-4 hover:text-teal-500">
						Timeline
					</a>
				</Link>

				<a
					href=""
					className="-mb-px border-b border-transparent p-4 hover:text-cyan-500"
				>
					Gold
				</a>

				<a
					href=""
					className="-mb-px border-b border-transparent p-4 hover:text-cyan-500"
				>
					Platinum
				</a>
			</nav>
			<div>To je twoje id ${id}</div>
		</>
	);
}
