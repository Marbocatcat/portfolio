import { SUBMIT_BLOG } from '../actions/index';


export default function(state = [], action) {
  switch(action.type) {
    case SUBMIT_BLOG: {
      return [ action.payload ];
    }
  }
  return state;
}
