import { Button } from '@mui/material';
import { useAppDispatch } from 'app/hooks';
import { authAction } from 'features/auth/authSlice';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import cityApi from './api/cityApi';
import { NotFound, PrivateRoute } from './components/Common';
import { AdminLayout } from './components/Layout';
import LoginPage from './features/auth/pages/LoginPage';

function App() {
	const dispatch = useAppDispatch();

	useEffect(() => {
		cityApi.getAll().then((response) => console.log(response));
		return () => {};
	}, []);

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				onClick={() => {
					dispatch(authAction.logout());
				}}
			>
				Logout
			</Button>
			<Switch>
				<Route path='/login'>
					<LoginPage />
				</Route>
				<PrivateRoute path='/admin'>
					<AdminLayout />
				</PrivateRoute>
				<Route>
					<NotFound />
				</Route>
			</Switch>
		</>
	);
}

export default App;
