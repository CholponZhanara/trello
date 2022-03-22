// import { type } from '@testing-library/user-event/dist/type'
import { useReducer } from 'react'
import { useDispatch, initialState } from 'react-redux'
import styled from 'styled-components'
import { authActions } from '../Store/auth'
const Styles = styled.div`
	width: 800px;
	height: auto;
	margin: 0 auto;
	display: flex;
`
const Img = styled.img`
	width: 150px;
	height: 50px;
`
const Input = styled.input`
	width: 300px;
	height: 50px;
	/* border: 5px; */
	margin: top;
	margin: 1rem auto;
	border-radius: 5px;
`
const Form = styled.form`
	margin: 0 auto;
`
const Button = styled.button`
	width: 300px;
	height: 55px;
	background-color: green;
	border-radius: 5px;
`
const Container = styled.div`
	width: 400px;
	height: 400px;
	padding: 20px;
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	background: white;
	box-shadow: 1px 1px 10px black;
`
const validEmailRegex = RegExp(
	/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
)
const reducerEmail = (state, action) => {
	if (action.type === 'EMAIL') {
		return {
			...state,
			name: action.name,
			isValid: validEmailRegex.test(action.name),
			error: 'dfgyhkijolp;',
		}
	}
}
const reducerPassword = (state, action) => {
	if (action.type === 'PASSWORD') {
		return {
			...state,
			name: action.name,
			isValid: action.name.length > 8,
			error: 'fhjvbfjkvbfjd',
		}
	}
}

const Auth = () => {
	const [email, dispatchEmail] = useReducer(reducerEmail, {
		name: '',
		isValid: false,
		error: false,
	})
	const [password, dispatchPassword] = useReducer(reducerPassword, {
		name: '',
		isValid: false,
		error: false,
	})

	const emailChangeHandler = (e) => {
		dispatchEmail({ type: 'EMAIL', name: e.target.value })
	}
	const passWordChangeHandler = (e) => {
		dispatchPassword({ type: 'PASSWORD', name: e.target.value })
	}
	const dispatch = useDispatch()

	const loginHandler = (e) => {
		e.preventDefault()
		dispatch(authActions.login())
	}

	return (
		<Styles>
			<Form>
				<Img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png' />
				<Container>
					<h2>вход в trello</h2>
					<b>{email.isValid ? '' : email.error}</b>
					<div>
						<Input
							
							onChange={emailChangeHandler}
							type='email'
							id='email'
							placeholder='Укажите адресс электронной почты'
						/>
					</div>
					<b>{password.isValid ? '' : password.error}</b>
					<div>
						<Input
							value={password.name}
							onChange={passWordChangeHandler}
							type='password'
							id='password'
							placeholder='Введите пароль'
						/>
					</div>

					<Button onClick={loginHandler}>Войти</Button>
				</Container>
			</Form>
		</Styles>
	)
}
export default Auth
