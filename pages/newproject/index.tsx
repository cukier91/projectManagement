import React, { useEffect, useState } from 'react';
import {
	Formik,
	Field,
	Form,
	FormikHelpers,
	useFormik,
	FormikProvider,
} from 'formik';
import { type } from 'os';
import { json } from 'node:stream/consumers';

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

export default function NewProject() {
	const [type, setType] = useState<TypeResponse[]>([]);

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
		const response = await fetch('http://localhost:3000/types');
		const json = await response.json();
		setType(json as TypeResponse[]);
	}

	useEffect(() => {
		try {
			getType();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div className="flex justify-center flex-col h-96 sm:h-screen items-center">
			<p className="text-lg font-bold mb-12 mt-12 md:mt-2">
				{' '}
				Załóż nowy projekt
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
				<Form className="flex flex-col w-2/3 h-64 md:px-16 justify-center align-middle gap-3 mt-5 md:mt-2 md:w-1/3 md:h-96">
					<label
						htmlFor="ewr"
						className="block text-xs font-medium text-gray-700"
					>
						EWR
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
						Project name
					</label>
					<Field
						type="text"
						id="name"
						name="name"
						placeholder="Your ewr number..."
						className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
					/>
					<label
						htmlFor="type"
						className="block text-xs font-medium text-gray-700"
					>
						Type
					</label>
					<Field
						component="select"
						id="type"
						name="type"
						className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
					>
						{type.map(({ id, name }) => {
							return (
								<option key={id} value={name}>
									{name}
								</option>
							);
						})}
					</Field>
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
	);
}
