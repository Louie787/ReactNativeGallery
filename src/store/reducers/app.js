import { CHANGE_LOADER, GET_IMAGES } from "../types";

const initialState = {
  isLoading: true,
  images: [],
};

const appReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_LOADER:
      return {
        ...state,
        isLoading: payload,
      };
    case GET_IMAGES:
      return {
        ...state,
        images: payload,
      };
    default:
      return state;
  }
};

export default appReducer;
