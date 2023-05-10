// imports from 3d party libraries
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppProps } from 'next/app';
import { useRecoilValue } from 'recoil';

// helpers
import { getDesignTokens } from '@/utils/helpers';

// store
import { themeState } from '@/store';

function App(props: AppProps) {
	const { Component, pageProps } = props;
	const theme = useRecoilValue(themeState);

	return (
		<ThemeProvider theme={createTheme(getDesignTokens(theme))}>
			<CssBaseline />
			<Box>
				<Box component='main'>
					<Component {...pageProps} />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
