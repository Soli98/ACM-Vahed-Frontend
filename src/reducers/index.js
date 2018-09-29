import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    auth: userReducer,
    form: formReducer,
});

export default rootReducer;
