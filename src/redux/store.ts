import {configureStore} from '@reduxjs/toolkit';
import {appReducer} from './reducers/appReducers';

const store = configureStore({
  reducer: {appReducer},
});

export {store};
