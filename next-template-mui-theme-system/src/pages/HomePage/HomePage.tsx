import Button from '@/shared/Button';

import { useSetRecoilState } from 'recoil';

import { THEMES_NAMES } from '@/utils/constants';

import { themeState } from '@/store';

const HomePage = () => {
	const setTheme = useSetRecoilState(themeState);
	return (
		<>
			{THEMES_NAMES.map((themeName) => (
				<Button
					key={themeName}
					onClick={() => {
						setTheme(themeName);
					}}
				>
					{themeName}
				</Button>
			))}
		</>
	);
};

export default HomePage;
