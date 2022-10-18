import React from 'react';
import { Formik, Field, Form, FormikHelpers } from 'formik';

interface Values {
	firstName: string;
	lastName: string;
	ewr: string;
}

export default function NewProject() {
	return (
		<div className="flex justify-center w-full h-96 sm:h-screen items-center">
			<Formik
				initialValues={{
					firstName: '',
					lastName: '',
					ewr: '',
				}}
				onSubmit={(
					values: Values,
					{ setSubmitting }: FormikHelpers<Values>
				) => {
					setTimeout(() => {
						alert(JSON.stringify(values, null, 2));
						setSubmitting(false);
					}, 500);
				}}
			>
				<Form className="flex flex-col px-10 py-10 border-2">
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
						placeholder="1111-1111"
						class="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
					/>

					<label htmlFor="lastName">Last Name</label>
					<Field id="lastName" name="lastName" placeholder="Doe" />

					<label htmlFor="email">Email</label>
					<Field
						id="email"
						name="email"
						placeholder="john@acme.com"
						type="email"
					/>
					<button type="submit">Submit</button>
				</Form>
			</Formik>
		</div>
	);
}
