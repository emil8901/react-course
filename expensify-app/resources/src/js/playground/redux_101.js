import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy 
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy 
});

const reset = ({ reset = 0 } = {}) => ({
  type: 'RESET',
  reset 
});

const set = ({ set = 101 } = {}) => ({
  type: 'SET',
  set 
});

const countReducer = (state = { count: 0 }, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }; 
      break;
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }; 
      break;
    case 'SET':
      return {
        count: action.set
      };
    case 'RESET':
      return {
        count: action.reset
      }; 
    default:
      return state;
  }
}

const store = createStore(countReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount());

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(reset({ count: 0 }));

store.dispatch(set({ count: 101 }));

store.dispatch(set());