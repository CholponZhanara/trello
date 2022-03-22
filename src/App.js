import './App.css'
import Auth from './components/Auth'
import { useSelector,useDispatch } from 'react-redux'
import Todo from './components/Todo'
import { AddCard } from './components/AddCard'
import Modal from './components/modal'
import { toggleActions } from './Store/toggle'


function App() {
	const dispatch = useDispatch()
	const showModal = useSelector(state=>state.toogle.showModal)
	console.log(showModal);
	const isAuth = useSelector((state) => state.auth.isAuthenticated)

	const hideModal =() =>{
		dispatch(toggleActions.closeModal())
	}

	return (

		<div className='App'>
            {showModal && <Modal onConfirm = {hideModal}/>}
			{isAuth ? <Todo /> : <Auth />}
			{/* <AddCard /> */}
		</div>
	)
}

export default App
