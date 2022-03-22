import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { addAction } from '../Store/add'
import { toggleActions } from '../Store/toggle'


const Styles = styled.div`
	width: 250px;
	background-color: white;
	margin-left: 30px;
	padding: 5px;
	border-radius: 4px;
`
const H3 = styled.h3`
	width: 250px;
	height: 30px;
	background-color: white;
	margin-right: 100px;
`
const Li = styled.div`
	width: 230px;
	/* padding-left: 90px; */
	/* padding: 0px 0px 0px 0px; */
	height: 30px;
	/* align-items: center; */
	background-color:whitesmoke;
	border-radius: 4px;
`
const Textarea = styled.textarea`
	width: 230px;
	height: 30px;
	margin-top:30px;
`
const Button = styled.button`
	margin: 10px;
	background-color: #0079bf;
	margin-left: -80px;
	border: none;
	color: #fff;
	height: 25px;
	/* width: 50px; */
	border-radius: 4px;
`

const Cart = (props) => {
	const dispatch = useDispatch()
	const [show, setShow] = useState(false)
	const [value, setValue] = useState()
	const todoAddHandler = () => {
		if (value.trim().length > 0) {
			dispatch(addAction.AddTodo({ task: value, id: props.id }))
			setValue('')
		}
	}

	const onChangeValue = (e) => {
		setValue(e.target.value)
	}
	const toggleTodoHandler = (e) => {
		setShow((prev) => !prev)
		console.log(props, 'props')
	}

	// const toggleShowHandler = (e) => {
	// 	dispatch(cartActions.toogle())
	// }
	const showModal = () => {
		dispatch(toggleActions.showModal())
	}
	// console.log(props.todo)
	return (
		<>
		<Styles>
			<H3>{props.task}</H3>
			{props.todo && (
				<div>
					{props.todo.map((el) => {
						return <Li onClick={showModal}>{el.task}</Li>
					})}
				</div>
			)}
			{show ? (
				<div>
					<Textarea
						value={value}
						onChange={onChangeValue}
						placeholder='Ввести заголовок для этой карточки'
					/>
					<Button onClick={todoAddHandler}>Добавить карточку</Button>
					<button onClick={toggleTodoHandler}>X</button>
				</div>
			) : (
				<div>
					<p onClick={toggleTodoHandler}>Добавить</p>
				</div>
			)}
		</Styles>
		</>
	)
}
export default Cart
