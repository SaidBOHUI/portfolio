import React from "react";
import styled from "styled-components";

const Experiences = () => {
	return(
		<BigContainer>
			<Title>
				<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" className="bi bi-journal-richtext" viewBox="0 0 16 16">
					<path d="M7.5 3.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm-.861 1.542 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047L11 4.75V7a.5.5 0 0 1-.5.5h-5A.5.5 0 0 1 5 7v-.5s1.54-1.274 1.639-1.208zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
					<path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2z"/>
					<path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1H1z"/>
				</svg>			
				<h2>Expériences</h2>
			</Title>
			<Xp>
				<div>
					<Date>
						<div>Depuis Février 2022</div>
						{/* <div></div> */}
					</Date>
					<Date>
						<div>
							Avril 2021,<br />Août 2021
						</div>
						{/* <div></div> */}
					</Date>
					<Date>
						<div>Novembre 2020,<br />Juillet 2021</div>
						{/* <div></div> */}
					</Date>
				</div>
				<LigneTemps>
					{/* <div>
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#1abc9c" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
							<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
							<path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
						</svg>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#1abc9c" className="bi bi-briefcase-fill" viewBox="0 0 16 16">
							<path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v1.384l7.614 2.03a1.5 1.5 0 0 0 .772 0L16 5.884V4.5A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5z"/>
							<path d="M0 12.5A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5V6.85L8.129 8.947a.5.5 0 0 1-.258 0L0 6.85v5.65z"/>
						</svg>
					</div>
					<div>
						<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="#1abc9c" className="bi bi-mortarboard-fill" viewBox="0 0 16 16">
							<path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5Z"/>
							<path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Z"/>
						</svg>
					</div> */}
				</LigneTemps>
				<TextXp>
					<div>
						<h2>Développeur web alternant - Belacom</h2>
						<h3>Issy-les-Moulineaux, Ile-de-France</h3>
						<p>Développement Front-Back HTML/ CSS/ JS/ NodeJs/ ReactJs. Développement de différentes API's</p>
					</div>
					<div>
						<h2>Développeur web junior - Chabana</h2>
						<h3>Paris, Ile-de-France</h3>
						<p>Développement Front-Back HTML/ CSS/ PHP/ Symfony/ Twig. Développement du site https:chocometry.said-bohui.com</p>
					</div>
					<div>						
						<h2>Bac+2 Développeur d'applications web</h2>
						<h3>Bagnolet, Ile-de-France</h3>
						<p>Renforcement des fondamentaux html/CSS/JS/PHP et apprentissage de framework et CMS tel que symfony, JQuery et wordpress</p>
					</div>
				</TextXp>
			</Xp>
		</BigContainer>
	)
}

const Title = styled.div`
display : flex;
	h2{
		font-size:2rem;
		font-weight: 800;
		margin-bottom: 4rem;
		margin-top: 0;
		color: white;
		margin-left: 1rem;
	}
@media(max-width: 660px){
	margin-left:2rem;
	margin-bottom: 1rem;
}
`

const LigneTemps = styled.div`
width: 2px;
background-color: white;
height: 50rem;
margin: 2rem 4rem;
padding: 0;

/* display: flex;
flex-direction: column;
justify-content: space-around;*/
/* div{
	&:nth-child(1){
		position: relative;
		top: 6rem;
		text-align: center ;
	} 
	&:nth-child(2){
		position: relative;
		top: 20rem;
		text-align: center ;
	} 
	&:nth-child(3){
		position: relative;
		top: 35rem;
		text-align: center ;
	} 
 } */
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
@media(max-width: 660px){
	display: block;
	margin-top: 2rem;
}
`

const Xp = styled.div`
/* background-color: #252E38; */
background-color: #19232D;
/* padding: 2rem; */
width:100%;
display: flex;
div{
	&:nth-child(1){
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
}
`

const Date = styled.div`
color : white;
font-weight: bold;

div{
	padding: .7rem 1rem;
	border: solid white 2px;
	background-color: #FA6E17;
	border-radius: 8px;
	width: auto;
	text-align: center;
	display: block;
}
`

const TextXp = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	color: #1abc9c;

	div{
		border: solid white 3px;
		border-radius: 8px;
		padding-right: 14rem;
		padding-left: 2rem;
		text-align: left;
	}
`

export default Experiences