import React from 'react';
import { useEffect, useState } from 'react';

export default function ProjectMatrix() {

    
    interface ApiData{
        id: string,
        ewr: string,
        Type: string,
        budget: number,
        end_date: string,
        free_budget: number,
    }

	const [projects, setProjects] = useState([]);

	async function getProjects() {
		try {
			const response = await fetch('http://localhost:3000/projects');
			const data = await response.json();
			setProjects(data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		getProjects();
	}, []);

	console.log(projects);

	return (
		<div className="overflow-x-auto sm:flex justify-center">
			<table className="w-2/3 divide-y-2 divide-gray-200 text-sm ">
				<thead>
					<tr>
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							EWR
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
						<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
							
						</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-gray-200">
					{projects?.map(({id,ewr, Type, budget, free_budget, end_date}) => {
						return (
							<tr key={id}>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
									{ewr}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{Type}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{budget}
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{free_budget}
								</td>
                                <td className="whitespace-nowrap px-4 py-2 text-gray-700">
									{end_date}
								</td>
                                <td>
                                    <button className='border-2 rounded text-white bg-yellow-500 px-1 py-1'>to Archive</button>
                                </td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}
