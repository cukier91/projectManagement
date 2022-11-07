import { Field, Form, Formik } from 'formik';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

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
	const [parser, setParser] = useState<number>(1);

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
			<div className="flex mt-5 justify-start flex-col sm:h-screen items-center">
				<div className=" text-lg font-bold">Add vendor</div>
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
						<div className={!parser ? '' : 'hidden'}>
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
							<label
								htmlFor="budget"
								className="block text-xs font-medium text-gray-700"
							>
								e-mail
							</label>
							<Field
								className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
								id="budget"
								name="budget"
								type="email"
								placeholder="example@example.com"
							/>
							<label
								htmlFor="endDate"
								className="block text-xs font-medium text-gray-700"
							>
								Phone no.
							</label>
							<Field
								className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
								name="endDate"
								type="text"
								placeholder="000-000-000"
							/>
							<label
								htmlFor="endDate"
								className="block text-xs font-medium text-gray-700"
							>
								Country
							</label>
							<Field
								className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
								id="endDate"
								name="endDate"
								type="text"
								placeholder="Country..."
							/>
						</div>
						<div className={parser ? '' : 'hidden'}>
							<div
								id="checkbox-group"
								className="block text-xs font-medium text-gray-700 mb-2 mt-4 sm:mt-12"
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
						</div>
						<div className="flex justify-start h-6 mt-4 mb-4">
							<svg
								onClick={() => setParser(0)}
								xmlns="http://www.w3.org/2000/svg"
								className={
									parser
										? 'icon icon-tabler icon-tabler-arrow-big-left'
										: 'hidden'
								}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M20 15h-8v3.586a1 1 0 0 1 -1.707 .707l-6.586 -6.586a1 1 0 0 1 0 -1.414l6.586 -6.586a1 1 0 0 1 1.707 .707v3.586h8a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1z"></path>
							</svg>
							<svg
								onClick={() => setParser(1)}
								xmlns="http://www.w3.org/2000/svg"
								className={
									!parser
										? 'icon icon-tabler icon-tabler-arrow-big-right'
										: 'hidden'
								}
								width="24"
								height="24"
								viewBox="0 0 24 24"
								stroke-width="2"
								stroke="currentColor"
								fill="none"
								stroke-linecap="round"
								stroke-linejoin="round"
							>
								<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
								<path d="M4 9h8v-3.586a1 1 0 0 1 1.707 -.707l6.586 6.586a1 1 0 0 1 0 1.414l-6.586 6.586a1 1 0 0 1 -1.707 -.707v-3.586h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1z"></path>
							</svg>
						</div>
						<span className={parser ? 'flex justify-end' : 'hidden'}>
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
