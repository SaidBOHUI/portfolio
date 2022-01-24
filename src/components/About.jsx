import React from 'react'
import { Typewriter } from 'react-simple-typewriter'
import styled from 'styled-components'
import Jauge from './Jauge'


const About = () => {

	const space = ' '
	return (
		<MainContainer id = 'Accueil'>
			<BigContainer>
				<MidContainer>
					<h2>Bonjour,</h2>				
					<p>Je m'appelle Saïd</p>
					<p>et je suis {space}
						<span>
							<Typewriter
							loop
							cursor
							cursorStyle ='|'
							typeSpeed = {70}
							deletespeed = {50}
							delayspeed = {1000}
							words={['développeur web junior', 'autodidacte', 'passioné de football','un futur entrepreneur','amateur de mangas','cinéphile']}
							/>
						</span>
					</p>
					<CvDownload>
						<a href="#">
							<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-arrow-down" viewBox="0 0 16 16">
								<path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293V6.5z"/>
								<path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5v2z"/>
							</svg>
							Télécharger mon CV
						</a>
					</CvDownload>
					</MidContainer>
					<MidContainer>
						<div><img src="" alt="" /></div>
					</MidContainer>
			</BigContainer>
			<SecBigContainer id = 'Competences'>
				<Title>
					<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="white" class="bi bi-code-slash" viewBox="0 0 16 16">
						<path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"/>
					</svg>
					<h2>Compétences</h2>
				</Title>
				<p>Actuellement en 3<sup>ème</sup> année de formation web, je possède de solide base en html/css/jss. Durant mon apprentissage en autodidacte et en formation, j'ai appris à maîtriser des frameworks tels que bootstrap et symfony. Ainsi je suis actuellement en cours de spécialisation en tant que MEARN stack developpeur.</p>
				<CompetenceTab>
					<h3>Mes compétences professionnelles</h3>
					<FullCompetence>
						<HalfCompetence>
							<Jauge matiere = 'html5' color = '#6C1F62' pourcentage = '80%'/>		
							<Jauge matiere = 'css' color = '#5DD3D8' pourcentage = '75%'/>		
							<Jauge matiere = 'PHP' color = '#D9A88E' pourcentage = '60%'/>		
							<Jauge matiere = 'Js' color = '#A80B19' pourcentage = '70%'/>		
						</HalfCompetence>
						<HalfCompetence>
							<Jauge matiere = 'React' color = '#F1AC1D' pourcentage = '50%'/>		
							<Jauge matiere = 'Bootstrap' color = '#7C380C' pourcentage = '70%'/>		
							<Jauge matiere = 'Symfony' color = '#E70A55' pourcentage = '70%'/>		
							<Jauge matiere = 'Anglais' color = '#2BF72E' pourcentage = '90%'/>		
						</HalfCompetence>
					</FullCompetence>
				</CompetenceTab>
			</SecBigContainer>
		</MainContainer>
	)
}

const MainContainer = styled.div`
`


const BigContainer = styled.div`
background-color: #19232D;
margin: 6rem 2rem 2rem;
padding: 2rem 3rem;
display: flex;
justify-content: flex-start;
flex-direction:row 
`

const MidContainer = styled.div`
width: 50%;
color: white;
font-weight: bold;
font-size: 1.2rem;
padding : 0 5rem 2rem;
 h2{
	font-size:4rem;
	font-weight: 800;
	margin-bottom: 1rem;
	margin-top: 1.5rem;
 }
 span{
	color:#1abc9c;
	font-weight: bold;
	font-size: 1.5rem;
 }
`
const CvDownload = styled.button`
width : 15rem;
height: 3rem;
background-color:#1abc9c;
color: #19232D;
margin-top : 2rem;
font-weight: bold;
font-size: 1rem;

a{
	text-decoration: none;
	color: #19232D;
}
`

//Tableau compétences

const SecBigContainer = styled.div`
background-color: #19232D;
margin: 2rem;
padding: 3rem 5rem;
justify-content: flex-start;
flex-direction:row;
color: white;

h2{
	font-size:2rem;
	font-weight: 800;
	margin-bottom: 1rem;
	margin-top: 0;
	color: white;
	margin-left: 1rem;
}
`

const Title = styled.div`
display : flex;
`

const CompetenceTab = styled.div`
background-color :#252E38;
padding : 2rem;
margin-top: 2.5rem;

h3{
	padding-left: 2rem;
	margin-bottom: 2.5rem;
	font-size: 1.7rem;
}
`

const HalfCompetence = styled.div`
width : 50%`

const FullCompetence = styled.div`
display : flex`

/* const SecondHalfCompetence = styled.div`
width : 50%` */



export default About
