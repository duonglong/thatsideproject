import Cookies from 'js-cookie';
import * as types from '../constants/ActionTypes';
import { loginToSpotify } from '../utils/SessionUtils';
import { CLIENT_ID } from '../constants/Spotify';
import { COOKIE_PATH } from '../constants/Common';

export const loginSuccess = oauthToken => ({
  type: types.LOGIN_SUCCESS,
  oauthToken,
});

export const spotifyLogin = async (dispatch) => {
  const oauthToken = await loginToSpotify(CLIENT_ID);
  dispatch(loginSuccess(oauthToken));
  Cookies.set(COOKIE_PATH, oauthToken);
  dispatch(loginSuccess(oauthToken));
};

export const spotifyLogout = async (dispatch) => {
  Cookies.remove(COOKIE_PATH);
};

export const initAuth = () => (dispatch) => {
  const oauthToken = Cookies.get(COOKIE_PATH);
  if (oauthToken) {
    dispatch(loginSuccess(oauthToken));
  }
};
