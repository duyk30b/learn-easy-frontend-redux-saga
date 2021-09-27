import { call, delay, fork, put, take } from '@redux-saga/core/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import { push } from 'connected-react-router';
import { authAction, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
	try {
		yield delay(500);
		localStorage.setItem('access_token', 'fake_token');
		yield put(
			authAction.loginSuccess({
				id: 1,
				name: 'Easy front end',
			})
		);
		//redirect to admin page
        yield put(push('/admin'))
	} catch (error) {
		yield put(authAction.loginFailed(error + ""));
	}
}
function* handleLogout() {
	yield delay(500);
	localStorage.removeItem('access_token');
    yield put(push('/login'))
	//redirect to login page
}

function* watchLoginFlow() {
	while (true) {
		const isLoggedIn = Boolean(localStorage.getItem('access_token'));
		if (!isLoggedIn) {
			const action: PayloadAction<LoginPayload> = yield take(
				authAction.login.type
			);
			yield fork(handleLogin, action.payload);
		}
		yield take(authAction.logout.type);
		yield call(handleLogout);
	}
}

export default function* authSaga() {
	yield fork(watchLoginFlow);
}
