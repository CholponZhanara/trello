import { configureStore } from '@reduxjs/toolkit'
import AddSlice from './add'
import authSlice from './auth'
import cartSlice from './cart'
import toggleSlice from './toggle'

const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		toogle: toggleSlice.reducer,
		add: AddSlice.reducer,
		cart:cartSlice.reducer
	},
})

export default store
