import { combineReducers } from 'redux';

import { reducer as todoListReducer } from '../domain/todo.list';
// import { reducer as exampleReducer } from './example';

export default combineReducers({
    todoList: todoListReducer,
    // other: exampleReducer
});