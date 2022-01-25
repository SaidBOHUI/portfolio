import React from "react";
import styled from "styled-components";
import styledComponents from "styled-components";

const Experiences = () => {
	return(
		<BigContainer>
			<div>
				<div></div>
				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</BigContainer>
	)
}

const BigContainer = styled.div`
background-color: #19232D;
margin: 2rem 2rem 2rem;
padding: 2rem 3rem;
display: flex;
justify-content: flex-start;
flex-direction:row; 
@media(max-width: 660px){
	display: block;
	margin-top: 6rem;
}
`

export default Experiences