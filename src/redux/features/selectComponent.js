import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    selectedItems: [],
}

export const selectComponentSlice = createSlice({
    name: 'selectComponent',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const category = action.payload.category
            state.selectedItems = state.selectedItems.filter(item => item.category !== category)
            state.selectedItems.push(action.payload)
        },
        removeItem: (state, action) => {
            state.selectedItems = state.selectedItems.filter(item => item._id !== action.payload._id)
        }
    },
})

export const { addItem, removeItem } = selectComponentSlice.actions

export default selectComponentSlice.reducer