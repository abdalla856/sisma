import { FETCH, FETCH_ALL } from "../actions/types";

export default (apps = [], action) => {
  switch (action.type) {
    case FETCH:
      return action.payload;
    case FETCH_ALL: 
      return action.payload;
    default:
      return apps;
  }
};
