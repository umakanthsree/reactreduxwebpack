import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
	background-color : grey;
	border: 1px solid #fefefe;
	border-radius: 5px;
	padding: 10px;
	display: block;
	width: ${props => props.small ? 80 : 150}px;
`;

const small = {}


const Para = styled.p`
	color: blue;
	background-color: white;
	border: 1px solid;
`;

const SuccessNote = styled(Para)`
	background-color: green;
	border-color: orange;
	border-radius: 5px;
`;

const ErrorNote = styled(SuccessNote)`
	background-color: orange;
	border-color: green;
`;

const yellowColor = 'yellow';

const Span = styled.span`
	color: ${yellowColor}
`;

const Section = styled.section`
	background-color: paleyellow;

	> h1 {
		background-color: voilet;
		font-size: 20px;
	}	

	@media(min-width: 720px){
		background-color: lightblue;

		> h1{
			font-size: 16px;
		}
	}

`;

export class StyledComponentBtn extends React.Component{
	render(){
	return(
		<div>

			<Button medium> StledButton </Button>
			<Button small> Small btn </Button>
			<Button large> Large btn </Button>
			<Para> ABCD EFGH  </Para>
			<SuccessNote> ABCD EFGH  </SuccessNote>
			<ErrorNote> ABCD EFGH  </ErrorNote>

			<Span> const color </Span>
			<h1> styled applied for H! tag outside section</h1>

			<Section> 
				Styled Section with &@)px medis breakpoint
				<h1> styled applied for H1 tag only inside the section</h1>

			</Section>
		</div>
	)
	}

}