import { createSlice } from '@reduxjs/toolkit'

const AddSlice = createSlice({
	name: 'add',
	initialState: [],
	reducers: {
		add: (state, action) => {
			state.push({
				task: action.payload.task,
				id: action.payload.id,
				todo: [],
			})
		},
		AddTodo: (state, action) => {
			const { task, id } = action.payload
			state.map((el) => {
				if (el.id === id) {
					el.todo.push({
						task,
						id: Math.random.toString(),
					})
				}
			})
		},
		showModal(state){
			state.showModal=true
		},
	   closeModal(state){
		   state.closeModal=false
	   }
	},
})
export const addAction = AddSlice.actions
export default AddSlice
