import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router'
import { createBrowserHistory } from 'history';
import peopleReducer from './people';

export const history = createBrowserHistory();

const rootReducer = combineReducers({
    people: peopleReducer,
    router: connectRouter(history),
})

export default rootReducer;