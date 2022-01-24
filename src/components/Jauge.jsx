import React from 'react';
import styled from 'styled-components';

const Jauge = (props) => {
	// matiere, color, pourcentage
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
padding-left: 2rem;
margin-top: 1rem;
margin-bottom: 2rem;

span{
	margin-right: 30px;
	width : 10%
}`

const WhiteBar = styled.div`
width : 70%;
background: white;
height : 20px;
border-radius: 5px;
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
