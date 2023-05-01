import { configureStore } from "@reduxjs/toolkit";
import {persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './Filter/filterSlice';
import { contactsReducer } from './Contacts/contactsSlice';
import { authReducer } from './Auth/authSlice';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'theme'],
};

const middleware = getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }); 

export const store = configureStore({
  reducer: {
  auth: persistReducer(
  authPersistConfig,
  authReducer
),
  contacts: contactsReducer,
  filter: filterReducer,
  },
  middleware,
});

export const persistor = persistStore(store);