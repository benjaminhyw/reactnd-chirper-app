import { getInitialData } from "../utils/api";

export function handleInitialData() {
  // this function uses the Redux Thunk pattern,
  // because we want to make an aynchronous request inside this function
  return dispatch => {
    return getInitialData().then(({ users, tweets }) => {});
  };
}
