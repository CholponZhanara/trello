import { useDispatch, useSelector } from 'react-redux'
import Styled,{createGlobalStyle} from 'styled-components'

const GlobalStyle = createGlobalStyle`
 body{
	   background: url('https://images.wallpaperscraft.ru/image/single/doroga_asfalt_razmetka_130996_1920x1080.jpg');
	   background-size: cover;
	   background-repeat: no-repeat;
       background-attachment: fixed;
	 
 } 
`
const Container = Styled.header`
  width: 1500px;
  height: 3rem;
  display: flex;
  background-color: gray;
  color: white;
  padding: 0 10%;
  position: fixed;
`
const Img = Styled.img`
 width: 150px;
 height: 50px;
 `
const Li = Styled.li`
  margin: 0 1rem;
  color: white;
 
 `
const Ul = Styled.ul`
 display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;

`
const Button = Styled.button`
width: 100px;
height: 40px;
 background-color: gray;
 border-radius:4px;
 
`

const Input = Styled.input`
width: 200px;
height: 30px;
border-radius:5px;
margin-left:300px
`

const Header = () => {
	const isAuth = useSelector((state) => state.auth.isAuthenticated)

	return (
		<>
		<GlobalStyle/>
		<Container>
			<Img src='https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/Trello_logo.svg/1200px-Trello_logo.svg.png' />
			<Ul>
				<Li>Рабочие пространства</Li>
				<Li>Недавние</Li>
				<Li>В избранном</Li>
				<Li>Шаблоны</Li>
				<Li>
					<Button>Создать</Button>
				</Li>
			</Ul>
			<Input placeholder='search' />
		</Container>
	
		</>
		
	)
}
export default Header
