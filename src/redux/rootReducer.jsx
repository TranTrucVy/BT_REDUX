// import {combineReducers,createStore} from 'redux';
// import BookingTickietReducer from './Reducer/BookingReducer'

// const rootReducer = combineReducers({
//     BookingTickietReducer, 
// })
// export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


import { configureStore } from '@reduxjs/toolkit';
import BookingTickietReducer from './Reducer/BookingReducer';

const store = configureStore({
  reducer: {
    booking: BookingTickietReducer,
  },
  // Các cấu hình khác của Redux Toolkit (nếu có)
});

export default store;
