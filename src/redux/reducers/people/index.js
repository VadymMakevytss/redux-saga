import * as actions from './action';

const initialState = {
  page: 1,
  search: '',
  loading: false,
  error: null,
  data: []
}

const peopleReducer = (state = initialState, action) => {
  switch(action.type){
    case actions.LOAD_USERS : {
      const { page, search } = action.payload
      return {
        ...state,
        loading: true,
        page, 
        search
      }
    }
    case actions.LOAD_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    case actions.LOAD_USERS_FAILURE: {
      return {
        ...state,
        loading: false,
        data: action.payload
      }
    }
    default: return state
  }
}

export default peopleReducer;
