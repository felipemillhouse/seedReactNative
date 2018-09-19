import { createActions, createReducer } from 'reduxsauce';
import update from 'react-addons-update';

/**
 * Types and Actions
 */
export const { Types, Creators } = createActions(
  {
    setPicProfileUser: ['url'],
    setUserUser: ['objUser'],
    savePicProfile: ['photo'],
    logOut: null,
    changeLoading: null,
  },
  { prefix: 'user/' },
);
/**
 * Reducers
 */
const INITIAL_STATE = {
  id: 0,
  username: '',
  name: '',
  email: '',
  token: '',
  picProfile: '',
  loading: false,
};
const setPicProfileUser = (state = INITIAL_STATE, action) => update(state, {
  picProfile: { $set: action.url },
});
const setUserUser = action => action.objUser;
const changeLoading = (state = INITIAL_STATE) => ({ ...state, loading: !state.loading });

/**
 * Switch Reducers
 */
const HANDLERS = {
  [Types.SET_PIC_PROFILE_USER]: setPicProfileUser,
  [Types.SET_USER_USER]: setUserUser,
  [Types.CHANGE_LOADING]: changeLoading,
};

export default createReducer(INITIAL_STATE, HANDLERS);
