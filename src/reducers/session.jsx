import * as types from '../constants/ActionTypes';

const initialState = {
    followings: {},
    id: null,
    likes: {},
    oauthToken: null,
    newStreamSongs: [],
};

const session = (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                oauthToken: action.oauthToken,
            };
        case types.LOGOUT:
            return {...initialState};

        default:
            return state;
    }
};

export default session;
