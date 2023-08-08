import { configureStore } from '@reduxjs/toolkit'
import selectComponentReducer from './features/selectComponent'

export const store = configureStore({
    reducer: {
        selectComponent: selectComponentReducer
    },
})
