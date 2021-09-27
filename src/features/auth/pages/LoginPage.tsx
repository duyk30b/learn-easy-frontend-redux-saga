import { Button, CircularProgress, Paper, Typography } from '@mui/material';
import { createStyles, makeStyles } from '@mui/styles';
import { useAppDispatch, useAppSelector } from 'app/hooks';
import React from 'react';
import { authAction } from '../authSlice';

const useStyles = makeStyles((theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexFlow: 'row nowrap',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '100vh',
		},
	})
);

export default function LoginPage() {
	const classes = useStyles();

	const dispatch = useAppDispatch();
	const isLogging = useAppSelector((state) => state.auth.logging);

	const handleLoginClick = () => {
		dispatch(
			authAction.login({
				username: '',
				password: '',
			})
		);
	};

	return (
		<div className={classes.root}>
			<Paper elevation={1} sx={{ p: 3 }}>
				<Typography variant='h5' component='h1'>
					Student Management
				</Typography>
				<Button
					fullWidth
					variant='contained'
					sx={{ mt: 4 }}
					color='primary'
					onClick={handleLoginClick}
				>
					{isLogging && (
						<CircularProgress size={20} color='secondary' />
					)}{''} Fake Login
				</Button>
			</Paper>
		</div>
	);
}
