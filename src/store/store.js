import {configureStore} from '@reduxjs/toolkit'
import parentSlice from './features/parentSlice';

const store=configureStore({
    reducer:{
        parent:parentSlice.reducer, 
    }
})

export default store;