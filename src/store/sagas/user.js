import { put, call } from 'redux-saga/effects';

// import api from 'services/api';
import { Creators as userActions } from 'store/ducks/user';

function* savePicProfile(action) {
  try {
    yield put(userActions.changeLoading());
  } catch (error) {
    // console.tron.log(`sagas/user.js/savePicProfile: ${error.message}`);
  } finally {
    yield put(userActions.changeLoading());
  }
}

export { savePicProfile };
