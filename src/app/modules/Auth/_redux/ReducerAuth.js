import { actionTypes } from "./ConfigAuth";

const initialAuthState = {
  user: undefined,
  authToken: undefined,
};

export const reducer = (state = initialAuthState, action) => {
  switch (action.type) {
    case actionTypes.Login: {
      const { authToken } = action.payload;
      console.log("authToken", authToken);
      return { authToken, user: undefined };
    }

    case actionTypes.Register: {
      const { authToken } = action.payload;

      return { authToken, user: undefined };
    }

    case actionTypes.Logout: {
      // TODO: Change this code. Actions in reducer aren't allowed.
      return initialAuthState;
    }

    case actionTypes.UserLoaded: {
      const data = action.payload;
      var user = Object.assign({}, data.user);
      console.log("user", user);
      return { ...state, user };
    }

    case actionTypes.SetUser: {
      const { user } = action.payload;
      return { ...state, user };
    }

    default:
      return state;
  }
};
