import type { AppProps } from 'next/app';
import dynamic from 'next/dynamic';

import { RecoilRoot } from 'recoil';

const App = dynamic(() => import('../App'), { ssr: false });

const MyApp = (props: AppProps) => {
	return (
		<RecoilRoot>
			<App {...props} />
		</RecoilRoot>
	);
};

export default MyApp;
