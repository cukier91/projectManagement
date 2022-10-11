import { StaticImageData } from 'next/image';
import React from 'react';

import Link from 'next/link';
export default function NavBar() {
	return (
		<header className="bg-slate-100">
			<div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 border-2">
				<div className="flex items-center justify-between h-16">
					<div className="md:flex md:items-center md:gap-12">
						<a className="block text-teal-600" href="/">
							<span className="sr-only">Home</span>
						</a>
					</div>

					<div className="hidden md:block ">
						<nav aria-labelledby="header-navigation">
							<h2 className="sr-only" id="header-navigation">
								Header navigation
							</h2>

							<ul className="flex items-center gap-6 text-sm">
							<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											New Project
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											Budgets
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											Vendors
										</a>
									</Link>
								</li>

								<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											Workload
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											Tasks
										</a>
									</Link>
								</li>
								<li>
									<Link href="/">
										<a className="text-gray-500 transition hover:text-gray-500/75">
											Archive
										</a>
									</Link>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="sm:gap-4 sm:flex">
							<a
								className="px-5 py-2.5 text-sm font-medium text-white bg-teal-600 rounded-md shadow  hover:bg-teal-700 focus:outline-none focus:ring"
								href="/"
							>
								Login
							</a>

							<div className="hidden sm:flex gap-4">
								<a
									className="px-5 py-2.5 text-sm font-medium text-teal-600 border-2 rounded-md border-teal-600  hover:bg-teal-700 hover:text-white focus:outline-none focus:ring"
									href="/"
								>
									Register
								</a>
							</div>
						</div>

						<div className="block md:hidden">
							<button className="p-2 text-gray-600 transition bg-gray-100 rounded hover:text-gray-600/75">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									className="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									strokeWidth="2"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
}
