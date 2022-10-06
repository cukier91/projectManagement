import { StaticImageData } from 'next/image';
import React from 'react';

import Link from 'next/link';
export default function NavBar() {
	return (
		<header className="bg-white">
			<div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
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
											About
										</a>
									</Link>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/"
									>
										History
									</a>
								</li>

								<li>
									<a
										className="text-gray-500 transition hover:text-gray-500/75"
										href="/"
									>
										Services
									</a>
								</li>
							</ul>
						</nav>
					</div>

					<div className="flex items-center gap-4">
						<div className="sm:gap-4 sm:flex">
							<a
								className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-md shadow  hover:bg-blue-700 focus:outline-none focus:ring"
								href="/"
							>
								Login
							</a>

							<div className="hidden sm:flex gap-4">
								<a
									className="px-5 py-2.5 text-sm font-medium text-white bg-blue-500 rounded-md shadow  hover:bg-blue-700 focus:outline-none focus:ring"
									href="/"
								>
									Register
								</a>
								<Link href="/basket">
									<a className="px-5 py-2.5 text-sm font-medium text-blue-500 bg-gray-100 rounded-md  hover:bg-gray-200 focus:outline-none focus:ring">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="icon icon-tabler icon-tabler-basket"
											width="20"
											height="20"
											viewBox="0 0 24 24"
											strokeWidth="2"
											stroke="currentColor"
											fill="none"
											strokeLinecap="round"
											strokeLinejoin="round"
										>
											<path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
											<polyline points="7 10 12 4 17 10"></polyline>
											<path d="M21 10l-2 8a2 2.5 0 0 1 -2 2h-10a2 2.5 0 0 1 -2 -2l-2 -8z"></path>
											<circle cx="12" cy="15" r="2"></circle>
										</svg>
									</a>
								</Link>
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
