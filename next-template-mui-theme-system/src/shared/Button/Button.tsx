import ButtonProps from '@/shared/Button/Button.types';
import useStyles from '@/shared/Button/Button.useStyles';
import { Button as MuiButton } from '@mui/material';

const Button = (props: ButtonProps) => {
	const { children, ...rest } = props;
	const styles = useStyles();
	const { root } = styles;
	return (
		<MuiButton {...rest} sx={root}>
			{children}
		</MuiButton>
	);
};

export default Button;
