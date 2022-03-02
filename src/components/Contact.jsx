import React from "react";
import styled from "styled-components";

const Contact = () => {
	return(
		<BigContainer id="Contact">
			<Title>
			<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-envelope-fill" viewBox="0 0 16 16">
				<path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
			</svg>
			<h2>Contact</h2>
			</Title>
			<Form action="#" method="post">
				<div className="firstLine">
					<input type="text" label='nom' name = 'name' placeholder="  Votre nom" className="nom"/>
					<input type="email" label='email' name = 'email' placeholder="  Votre email" className="email" />	
				</div>
					<input type="text" label='sujet' name = 'sujet' placeholder="      sujet" className="sujet" />
					<textarea name="message" label='message' placeholder="  Votre Message" className="message"/>				
					<input type="submit" className="submit" />
			</Form>
		</BigContainer>
	)
}

const Title = styled.div`
	display: flex;
align-items:center;
color: white;
text-align: center;
margin-bottom: 2rem;

h2{
	font-size: 2rem;
    font-weight: 800;
    margin-top: 0;
	margin-bottom: 0;
    color: white;
    margin-left: 1rem;
}`

const Form = styled.form`
display: flex;
flex-direction: column;
`

const BigContainer = styled.div`
background-color: #19232D;
margin: 2rem 2rem 2rem;
padding: 5rem 5rem;
display: flex;
justify-content: flex-start;
flex-direction:column; 
border-radius: 8px;
box-shadow: 5px 5px 6px;

.firstLine{
	margin-bottom:1.6rem;
	padding: 0;
	width: 50%;
	display: flex;
	justify-content: left;
}
.nom, .email{
	width: 50%;
	border : solid black 2px;
	height: 3rem;
	border-radius:40px;
	padding-left: 1rem;

}
.sujet{
	width: 50%;
	border : solid black 2px;
	height: 3rem;
	border-radius:40px;
	margin-bottom: 1.6rem;
}
.message{
	width: 50%;
	border : solid black 2px;
	height: 10rem;
	border-radius:40px;
	margin-bottom: 1.6rem;
	padding-top: 1rem;
}

.submit{
width: 10rem;
border : solid black 2px;
height: 3rem;
border-radius:20px;
text-align: center;
background-color: #1abc9c;
color: white;
cursor: pointer;
}
`


// const Champ = styled.div`
// 	width: 20rem;
// 	background : white;
// `

// const DoubleChamp = styled.div `

// `

export default Contact