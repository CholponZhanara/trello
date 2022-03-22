import styled from 'styled-components'

const Modal = (props) => {
	const Modall = styled.div`
		width: 400px;
		height: 200px;
		border-radius: 3px;
		background-color: #fff;
		padding: 2rem;
		
		justify-content: space-around;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
        z-index: 100;
	`

	const Backdrop = styled.div`
		position: fixed;
		top: 0px;
		right: 0px;
		bottom: 0px;
		left: 0px;
		background: rgba(0, 0, 0, 0.7);
        z-index: 10;
	`
    const Textarea = styled.textarea`
    width: 400px;
    height: 60px;
    `
	const Button = styled.button`
	margin: 10px;
	background-color: #0079bf;
	margin-left: -250px;
	border: none;
	color: #fff;
	height: 25px;
	border-radius: 4px;
	margin-bottom: 250px;
	`
	const BtnButton= styled.button`
	width: 30px;
	height: 20px;
	`

	return (
		<>
			<Backdrop />
			<Modall>
				<h3>Описание</h3>
				<Textarea placeholder='добавить более подробное описание...' />
				<div>
					<Button onClick={props.onConfirm}>Сохранить</Button>
					<BtnButton onClick={props.onConfirm}>X</BtnButton>
				</div>
			</Modall>
		</>
	)
}
export default Modal
