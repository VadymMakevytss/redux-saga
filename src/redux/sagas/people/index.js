import { LOCATION_CHANGE } from 'connected-react-router';
import { call, takeEvery, put, apply, take, select, fork } from 'redux-saga/effects';
import { LOAD_USERS, LOAD_USERS_SUCCESS } from '../../reducers/people/action';

export function* loadPeopleDetails() {

}

export function* loadPeopleList({payload}) {
  const { page, search } = payload;
  const request = yield call(fetch, `https://swapi.dev/api/people?page=${page}&search=${search}`);
  const data = yield apply(request, request.json);

  yield put({
    type: LOAD_USERS_SUCCESS,
    payload: data
  })
}

export function* loadUsersOnRouteEneter() {
  while(true) {
    const action = yield take(LOCATION_CHANGE);

    if(action.payload.location.pathname === '/'){
      const state = yield select(state => state.people)
      const { page, search } = state;

      yield put({
        type: LOAD_USERS,
        payload: {
          page,
          search
        }
      })
    }
  }
}

export default function* peopleSaga() {
  yield fork(loadUsersOnRouteEneter)
  yield takeEvery(LOAD_USERS, loadPeopleList)
}