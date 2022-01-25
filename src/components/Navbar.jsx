import React, { useState } from 'react';
import styled from 'styled-components'



const Navbar = () => {

	const [visible, setvisible] = useState(false)


	return(
			<NavStyle visible = {visible}>
				<Blaze href = '#Accueil'>Said Bohui</Blaze>
				<MenuStyle visible = {visible}>
					<MenuLink href="#Competences">Compétences</MenuLink>
					<MenuLink href="#">Expériences</MenuLink>
					<MenuLink href="#">Portfolio</MenuLink>
					<MenuLink href="#">Contact</MenuLink>
					<ShadowAnime></ShadowAnime>
				</MenuStyle>
				<BurgerStyle onClick={()=> setvisible(!visible)} visible = {visible}>
					<Bar visible = {visible}></Bar>
					<Bar visible = {visible}></Bar>
					<Bar visible = {visible}></Bar>
				</BurgerStyle>
			</NavStyle>
	)
}
const ShadowAnime = styled.div`
	position: absolute;
	height: 100%;
	/* height: 5px;  */
	top: 0;
	/* bottom: 0; ; */
	z-index: 0;
	background: #1abc9c;
	border-radius: 8px;
	transition: all .5s ease 0s;
	@media(max-width: 660px){
		display: none;
	}

`


const NavStyle = styled.nav`

	position: fixed;
	top : 0 ;
	width: 100%;
	height: 70px;
	/* background: #212F3C; */
	background :#151F27;
	font-size: 0;
	box-shadow: 0 2px 3px 0 rgba(0,0,0,.1);
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-family: 'Open Sans', 'sans-serif';
	@media(max-width: 660px){
		/* height: 100vh; */
		height:${({visible}) => visible ? "100vh":'0'} ;
		background:${({visible}) => visible ? "#151F27":'#B8FAF0'} ;
		/* background:${({visible}) => visible ? "#151F27":'#212F3C'} ; */
		z-index: 3;
	}
`
const Blaze = styled.a`
	font-size:1.4rem;
	font-weight: 800;
	text-decoration: none;
	text-transform: uppercase;
	margin : 0 1rem;
	color: white;
	cursor: pointer;
	/* color: #FFAA00;  */
	@media(max-width: 660px){
		display: none;
	}

`

const MenuStyle = styled.div`
	display: block;

	@media(max-width: 660px){
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	position:absolute;
	top: 0;
	right: 0;
	/* bottom: 0; */
	height: 100vh;
	width: 100%;
	/* padding: 2rem; */
	background: #151F27;
	transform: ${({visible}) => visible ? "translateX(0)":'translateX(100%)'} ;
	transition: transform 400ms;
	}
`

const MenuLink = styled.a`
	font-size: 1rem;
	text-transform: uppercase;
	color: white;
	/* color: #FFAA00; */
	text-decoration: none;
	line-height: 70px;
	position: relative;
	z-index: 1;
	display: inline-block;
	text-align: center;
	height: 70px;
	padding: 0 1rem;

	&:nth-child(1) {
		&:hover~${ShadowAnime}{
			width: 144.92px;
			right:358.56px
		}
	}
	&:nth-child(2) {
		&:hover~${ShadowAnime}{
			width: 131.67px;
			right: 226.89px;
		}
	}
	&:nth-child(3) {
		&:hover~${ShadowAnime}{
			width: 118.73px;
			right: 108.16px;
		}
	}
	&:nth-child(4) {
		&:hover~${ShadowAnime}{
			width: 104.39px;
			right:0;
		}
	}
	@media(max-width: 660px){
		padding: 1.5rem;
		font-size: 5vw;
		text-decoration: none;
		top: 0;
		right: 0;
			&:hover{
				color: #1abc9c;
			}

}
`
const BurgerStyle = styled.button`
	display: none;
		@media(max-width: 660px){
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			position: fixed;
			height: 2.5rem;
			top: 2rem;
			right: 2rem;
			background: transparent;
			border: none;
			cursor:pointer;
			z-index: 5;
 		}
`

const Bar = styled.div`
/* display: none; */

	@media(max-width:660px){
	width: 2.5rem;
	height: 0.2rem;
	background:${({visible}) => visible ? '#1abc9c':'#151F27'} ;
	z-index: 5;
	position: relative;
	border-radius: 5px;
	transform-origin : 3px ;
		&:nth-child(1){
			transform: ${({visible}) => visible ? 'rotate(45deg)':'rotate(0)'};
		}
		&:nth-child(2) {
			opacity: ${({visible}) => visible ? '0':'1'}
		}
		&:nth-child(3){
			transform: ${({visible}) => visible ? "rotate(-45deg)":"rotate(0)"};
		}
	}			
`








export default Navbar;

