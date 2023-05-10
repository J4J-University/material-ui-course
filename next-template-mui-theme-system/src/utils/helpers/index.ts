import { THEMES_NAMES } from '@/utils/constants';

import { palettes } from '@/style/theme/palettes';

export const getDesignTokens = (mode: (typeof THEMES_NAMES)[number]) => {
	if (palettes[mode]) {
		return palettes[mode];
	} else {
		return palettes.lightTheme;
	}
};
