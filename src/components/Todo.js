import Header from './Header'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { toggleActions } from '../Store/toggle'
import { addAction } from '../Store/add'
import { useState } from 'react'	
import { AddCard } from './AddCard'


const Div = styled.div`
	display: flex;
	width: 300px;	
	height: 50px;
	padding-top: 50px;
	margin-right: 30px;
	
`
const P = styled.p`
	color: white;
`
const Input = styled.input`
	height: 30px;
	width: 250px;
	margin-left: 30px;
`
const Button = styled.button`
	margin: 10px;
	background-color: #0079bf;
	margin-right: 90px;
	border: none;
	color: #fff;
	height: 25px;
	border-radius: 4px;
`

const Todo = () => {
	const [value, setValue] = useState('')
	const toogle = useSelector((state) => state.toogle.showToggle)
	// console.log(toogle)
	const dispatch = useDispatch()

	const onChangeValue = (e) => {
		setValue(e.target.value)
	}
	console.log(value)

	const toogleHandler = (e) => {
		dispatch(toggleActions.toogle())
	}
	const addHandler = () => {
		if (value.trim().length > 0) {
			dispatch(
				addAction.add({
					task: value,
					id: Math.random().toString(),
				}),
				setValue('')
			)
		}
	}

	return (
		<>
			<Header />
			<Div>
			<AddCard/>

				{!toogle ? (
					<P onClick={toogleHandler}>+Добавить еще одну колонку</P>
				) : (
					<div>
						<Input value={value}
							placeholder='Ввести заголовок списка'
							onChange={onChangeValue}
						/>
						<Button onClick={addHandler}>Добавить список</Button>
						<button
							onClick={() => dispatch(toggleActions.change())}
						>
							X
						</button>
					</div>
				)}
			</Div>
		</>
	)
}
export default Todo
