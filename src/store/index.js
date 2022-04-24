import newsFeed from '../reducers/newsFeed';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {newsFeed},
    middleware: getDefaultMiddleware => getDefaultMiddleware(),
    devTools: process.env.NODE_EW !== 'production',    
})

export default store;