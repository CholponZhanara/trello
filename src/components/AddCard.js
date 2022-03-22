import React from 'react'
import { useSelector } from 'react-redux'
import Cart from './Cart'
import styled from 'styled-components'

export const AddCard = () => {
	const tasks = useSelector((state) => state.add)
	console.log(tasks)
	return (
		<CardGroup>
			{tasks.map((el) => {
        console.log(el,'cart');
				return <Cart key={el.id} task={el.task} todo={el.todo} id={el.id} />
			})}
		</CardGroup>
	)
}
const CardGroup = styled.div`
	display: flex;
  align-items: flex-start;
`
