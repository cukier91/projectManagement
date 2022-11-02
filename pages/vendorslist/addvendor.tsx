import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import VendorsList from '.';

interface Values {
	name: string;
	endDate: string;
	ewr: string;
	type: string;
	budget: number;
	isArchived: boolean;
	wbs: Array<object>;
}
interface TypeResponse {
	id: number;
	name: string;
}

export default function AddVendor() {
	const [workType, setWorkType] = useState<TypeResponse[]>([]);

	async function handleSubmit(values: Values) {
		const response = await fetch('http://localhost:3000/projects', {
			method: 'post',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(values),
		});
		console.log(response.json());
	}

	async function getType() {
		const response = await fetch('http://localhost:3000/worktypes');
		const json = await response.json();
		setWorkType(json as TypeResponse[]);
	}

	useEffect(() => {
		try {
			getType();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<>
			<nav className="flex border-b border-gray-100 text-sm font-medium">
				<Link href={`/vendorslist`}>
					<a className="-mb-px border-b border-transparent p-4 hover:text-teal-600">
						All vendors
					</a>
				</Link>
				<Link href="/vendorslist/addvendor">
					<a className="-mb-px border-b border-current p-4 text-teal-600">
						Add vendor
					</a>
				</Link>
			</nav>
			<div className="flex justify-center flex-col sm:h-screen items-center">
				<p className=" h-3 text-lg font-bold mb-12 sm:mb-24 mt-5 md:mt-2">
					{' '}
					Add vendor
				</p>
				<Formik<Values>
					initialValues={{
						name: '',
						endDate: '',
						ewr: '',
						type: '',
						budget: 0,
						isArchived: false,
						wbs: [],
					}}
					onSubmit={handleSubmit}
				>
					<Form className="flex flex-col w-2/3 md:px-16 justify-center align-middle gap-3 mt-5 md:mt-2 md:w-1/3 md:h-96">
						<label
							htmlFor="ewr"
							className="block text-xs font-medium text-gray-700"
						>
							Company name
						</label>
						<Field
							type="text"
							id="ewr"
							name="ewr"
							placeholder="Your ewr number..."
							className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
						/>
						<label
							htmlFor="name"
							className="block text-xs font-medium text-gray-700"
						>
							Company logo URL
						</label>
						<Field
							type="text"
							id="name"
							name="name"
							placeholder="Your ewr number..."
							className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
						/>

						<div
							id="checkbox-group"
							className="block text-xs font-medium text-gray-700"
						>
							Work types
						</div>
						<div
							role="group"
							className="flex gap-3 flex-wrap border-gray-200 shadow-sm text-xs sm:w-3/4"
							aria-labelledby="checkbox-group"
						>
							{workType.map((type) => {
								return (
									<label key={type.id} className="px-0 ml-2">
										<Field
											className="accent-teal-600 mr-1"
											type="checkbox"
											name="type"
											value={type.name}
										/>
										{type.name}
									</label>
								);
							})}
						</div>
						<label
							htmlFor="budget"
							className="block text-xs font-medium text-gray-700"
						>
							Budget
						</label>
						<Field
							className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
							id="budget"
							name="budget"
							placeholder="5 000 000"
							type="number"
							//step="0.1"
							min={0}
						/>
						<label
							htmlFor="endDate"
							className="block text-xs font-medium text-gray-700"
						>
							End date
						</label>
						<Field
							className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
							id="endDate"
							name="endDate"
							type="date"
						/>
						<span className="flex justify-end">
							<button
								className=" bg-teal-600 w-2/5 md:w-1/5  text-white px-1 py-1 rounded-md"
								type="submit"
							>
								Submit
							</button>
						</span>
					</Form>
				</Formik>
			</div>
		</>
	);
}
