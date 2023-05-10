import { Button as MuiButton } from '@mui/material';
import React from 'react';

interface ButtonProps extends React.ComponentProps<typeof MuiButton> {}

const Button = (props: ButtonProps) => {
	return <MuiButton {...props} />;
};

export default Button;
