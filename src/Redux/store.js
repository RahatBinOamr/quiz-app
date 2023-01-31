import { combineReducers, configureStore } from '@reduxjs/toolkit';
import question_reducer from './question_reducer';
import result_reducer from './result_reducer';


/** call reducers */


const rootReducer = combineReducers({
    questions : question_reducer,
    result : result_reducer
})

/** create store with reducer */
export default configureStore({ reducer : rootReducer});
/* https://github.com/akashyap2013/Quiz_App_Client/compare/master...Authorize_User_14 */
/* https://github.com/akashyap2013/Quiz_App_Server/compare/Routes_01...Finalizing_Controllers_05 */