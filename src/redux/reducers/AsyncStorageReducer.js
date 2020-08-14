import * as types from "./index";

const initialState = {
  token: {},
  loading: true,
  error: null,
};

const asyncStorageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ASYNC_STORAGE_LOADING:
      return{
        ...state,
        loading: true
      }
    case types.GET_TOKEN:
      return { 
        ...state, 
        token: action.token,
        loading: false
      };
    case types.SAVE_TOKEN:
      return { 
        ...state, 
        token: action.token,
        loading: false
      };
    case types.REMOVE_TOKEN:
      return { 
        ...state, 
        token: action.token,
        loading: false
      };
    case types.ASYNC_STORAGE_ERROR:
      return { 
        ...state, 
        error: action.error,
        loading: false
      };
    default:
      return state;
  }
};

export default asyncStorageReducer;