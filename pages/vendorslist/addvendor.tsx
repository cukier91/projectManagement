import Link from 'next/link';
import React from 'react';
import VendorsList from '.';

export default function AddVendor() {
	return (
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
	);
}
