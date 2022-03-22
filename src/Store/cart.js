import { createSlice } from '@reduxjs/toolkit'

const initCartState = { cardToggle: false }

const cartSlice = createSlice({
	name: 'cart',
	initialState: initCartState,
	reducers: {
		deleteToggle(state) {
			state.cardToggle = true
		},
	},
})
export const cartActions = cartSlice.actions
export default cartSlice
