import '../styles/globals.css';
import type { AppProps } from 'next/app';
import LayoutComponent from '../components/LayoutComponent/LayoutComponent';
import { UserProvider } from '@supabase/auth-helpers-react';
import { supabaseClient } from '@supabase/auth-helpers-nextjs';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<UserProvider supabaseClient={supabaseClient}>
			<LayoutComponent>
				<Component {...pageProps} />
			</LayoutComponent>
		</UserProvider>
	);
}

export default MyApp;
