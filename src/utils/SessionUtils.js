import { SCOPE_USER_TOP_READ, SCOPE_READ_PLAYBACK_STATE, SCOPE_USER_READ_CURRENTLY_PLAYING} from '../constants/Spotify';
import { SPOTIFY_ACCOUNT } from '../constants/SpotifyApi'

const SCOPES = [
    SCOPE_USER_TOP_READ,
    SCOPE_USER_READ_CURRENTLY_PLAYING,
    SCOPE_READ_PLAYBACK_STATE,
];

export const AUTH_ENDPOINT = SPOTIFY_ACCOUNT + 'authorize';

export const loginToSpotify = (clientID) => {
    var login_url = AUTH_ENDPOINT
};
