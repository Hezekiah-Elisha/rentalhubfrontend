import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';
import propertyReducer from './properties/propertySlice';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from "redux-persist";
import singlePropertySlice from './properties/singlePropertySlice';

const rootReducer = combineReducers({
    user: userReducer,
    properties: propertyReducer,
    property: singlePropertySlice,
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});

export const persistor = persistStore(store);