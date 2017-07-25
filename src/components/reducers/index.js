import { combineReducers } from 'redux';
import imageReducer from './imageReducer';
import blogReducer from './blogReducer';

const rootReducer = combineReducers({
  images: imageReducer,
  blogs: blogReducer,
});

export default rootReducer;
