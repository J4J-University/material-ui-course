import { useTheme } from '@mui/material';

const useStyles = () => {
	const theme = useTheme();

	return {
		root: {
			color: theme.palette.primary.contrastText,
			backgroundColor: theme.palette.primary.main,
			'&:hover': {
				backgroundColor: theme.palette.primary.dark,
			},
		},

		label: {
			color: theme.palette.primary.contrastText,
		},
	};
};

export default useStyles;
