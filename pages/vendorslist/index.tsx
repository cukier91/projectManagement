import Link from 'next/link';
import React from 'react';

export default function VendorsList() {
	return (
		<>
			<nav className="flex border-b border-gray-100 text-sm font-medium">
				<Link href="/vendorslist">
					<a className="-mb-px border-b border-current p-4 text-teal-600">
						All vendors
					</a>
				</Link>

				<Link href={'vendorslist/addvendor'}>
					<a className="-mb-px border-b border-transparent p-4 hover:text-teal-600">
						Add vendor
					</a>
				</Link>
			</nav>
			<div className="flex justify-center">
				<div className="w-full px-2 py-2 md:w-2/3">
					<table className="min-w-full divide-y-2 divide-gray-200 text-sm">
						<thead>
							<tr>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									Company name
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									Logo
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									Type of work
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									Ocena[1-10]
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									e-mail
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									nr. telefonu
								</th>
								<th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
									Kraj
								</th>
							</tr>
						</thead>

						<tbody className="divide-y divide-gray-200">
							<tr>
								<td className="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
									PG projekty
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									Tu będzie logo
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									Budowlane
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									5.5
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									e-mail@przykład.pl
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									723-321-123
								</td>
								<td className="whitespace-nowrap px-4 py-2 text-gray-700">
									Poland
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</>
	);
}
