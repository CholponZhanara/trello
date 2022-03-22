import { createSlice } from '@reduxjs/toolkit'

const initToggleState = { showToggle: false, showModal: false }

const toggleSlice = createSlice({
	name: 'toggle',
	initialState: initToggleState,
	reducers: {
		change(state) {
			state.showToggle = false
		},
		toogle(state) {
			state.showToggle = true
		},
		showModal(state) {
			state.showModal = true
		},
		closeModal(state) {
			state.showModal = false
		},
	},
})
export const toggleActions = toggleSlice.actions
export default toggleSlice
