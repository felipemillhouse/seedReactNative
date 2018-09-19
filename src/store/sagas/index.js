import { all, takeLatest } from 'redux-saga/effects';

import { Types as userTypes } from 'store/ducks/user';
import { savePicProfile } from './user';

export default function* rootSaga() {
  return yield all([takeLatest(userTypes.SAVE_PIC_PROFILE, savePicProfile)]);
}
