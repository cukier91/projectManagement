import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';
import { useProjectsContext } from '../../context/ProjectsContext';

export default function ProjectMatrix() {
	interface ApiData {
		id: string;
		ewr: string;
		Type: string;
		budget: number;
		end_date: string;
		name: string;
	}

	const { projects, setProjects } = useProjectsContext();



	const putData = async (id: number) => {
		const response = await fetch(`http://localhost:3000/projects/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({ isArchived: true }),
		});

		const data = await response.json();
		console.log(data)
	};

	return (
		<div className="overflow-x-auto sm:flex justify-center">
			<table className="w-2/3 divide-y-2 divide-gray-200 text-sm ">
				<thead>
					<tr>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							EWR
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							Project name
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							Type
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							Project budget
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							Free budget
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							End date
						</th>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900"></th>
					</tr>
				</thead>

				<tbody className="divide-y divide-gray-200">
					{projects?.map(({ id, ewr, name, type, budget, endDate }) => {
						return (
							<tr key={id}>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
									<Link href={`/projectdetail/${ewr}`}>
										<a>{ewr}</a>
									</Link>
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{name}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{type}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{budget}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									FREE
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{endDate}
								</td>
								<td>
									<button
										onClick={() => {
											putData(id);
										}}
										className="border-2 rounded text-white bg-yellow-500 px-1 py-1"
									>
										Archive
									</button>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
