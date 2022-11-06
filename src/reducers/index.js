import { combineReducers } from "redux";
import BookReducer from './bookReducer';
import SelectedBookReducer from "./selectedBookReducer";
export default combineReducers({
    data: BookReducer,
    selectedBook: SelectedBookReducer
});