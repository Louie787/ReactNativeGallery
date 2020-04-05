import { CHANGE_LOADER, GET_IMAGES } from "../types";

const url =
  "https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0";

export const getImages = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: CHANGE_LOADER, payload: true });
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: GET_IMAGES, payload: data });
      dispatch({ type: CHANGE_LOADER, payload: false });
    } catch (error) {
      throw new Error(error);
    }
  };
};
