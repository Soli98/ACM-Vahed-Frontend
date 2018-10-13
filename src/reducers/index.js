import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import userReducer from './user_reducer';
import curriculumsReducer from './curriculum_reducer';
import currentCurriculumReducer from './current_curriculum_reducer';

const rootReducer = combineReducers({
    auth: userReducer,
    curriculums: curriculumsReducer,
    currentCurriculum: currentCurriculumReducer,
    form: formReducer,
});

export default rootReducer;
