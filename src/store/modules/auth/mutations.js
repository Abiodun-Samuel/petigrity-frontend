export const SET_TOKEN = (state, token) => {
  state.token = token;
};

export const SET_AUTH_STATE = (state, payload) => {
  state.isAuth = payload;
};

export const SET_AUTH_ERROR = (state, error) => {
  state.errors = error;
};

export const SET_USER_VERIFICATION = (state, payload) => {
  state.verify.e = payload.user_email;
  state.verify.i = payload.user_id;
};

export const SET_AUTH_LOADER = (state, payload) => {
  state.loading = payload;
};
