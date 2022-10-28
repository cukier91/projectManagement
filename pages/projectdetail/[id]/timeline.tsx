import { useRouter } from 'next/router';
import Link from 'next/link';

const Timeline = () => {
	const router = useRouter();
	const id = router.query.id as string;

    const activeTab:"timeline"|"project details"="timeline"

	return (
		<>
			<nav className="flex border-b border-gray-100 text-sm font-medium">
				<Link href={`/projectdetail/${id}`} passHref>
					<a className={`-mb-px border-b border-transparent p-4 text-cyan-500`}>
						Project details
					</a>
				</Link>

				<a className={`-mb-px border-b ${activeTab==="timeline" ? "border-current" : 
                "border-transparent"} p-4 text-cyan-500`}>
					Timeline
				</a>

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
			<div>Timeline</div>
		</>
	);
};
export default Timeline;
