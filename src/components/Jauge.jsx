import React from 'react';
import styled from 'styled-components';

const Jauge = (props) => {
const color = props.color;
const pourcentage = props.pourcentage;
	return(
		<Competence>
			<span>{props.matiere}</span>
			<WhiteBar>
				<ColoredBar color = {color} pourcentage = {pourcentage}></ColoredBar>
			</WhiteBar>
		</Competence>
	)
}


const Competence = styled.div`
display : flex;
justify-content: space-between;
margin-top: 1rem;
margin-bottom: 2rem;

span{
	width : 10%;
	text-align: left;
}

@media(max-width: 660px){
width : 100%;
/* margin-right: 2rem; */
display: flex;
justify-content: space-between;


}`

const WhiteBar = styled.div`
width : 70%;
background: white;
height : 20px;
border-radius: 5px;
@media(max-width: 660px){
	width : 70%;
}
`

const ColoredBar = styled.nav`

width: ${props => props.pourcentage};
background-color: ${props => props.color};
z-index: 2;
height: 20px;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
`


export default Jauge
