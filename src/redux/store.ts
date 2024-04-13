import storage from 'redux-persist/lib/storage';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { bookReducer, brandingReducer } from './reducers';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  // reducers
  branding: brandingReducer,
  book: bookReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  devTools: process.env.NODE_ENV == 'development',
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false
    })
});
// .concat(unauthorizedHandlerMiddleware)

export const persistor = persistStore(store);
