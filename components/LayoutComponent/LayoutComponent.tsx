import React from 'react';
import NavBar from '../NavBar/NavBar';

export default function LayoutComponent({
	children,
}: {
	children: JSX.Element;
}) {
	return (
		<>
			<NavBar />
			{children}
		</>
	);
}
