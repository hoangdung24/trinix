import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonSeeOurProject = () => {
	return (
		<ButtonStyled sx={{ textTransform: "unset" }}>
			<Title className='text' variant='title2'>
				See Our Projects
			</Title>
			<Arrow />
		</ButtonStyled>
	);
};

export default ButtonSeeOurProject;

// Styled Sheet

const ButtonStyled = styled(Button)(({ theme }) => {
	return {
		position: "relative",
		background: "#000000",
		borderRadius: "10px",
		height: "50px",
		width: "300px",
		"&:hover": {
			background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
			border: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
			boxShadow: "none",
		},
		"&:active": {
			boxShadow: "none",
			background: "#000000",
			border: "#FC5493",
		},
		"&:hover .text": {
			textDecorationLine: "underline",
		},
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		position: "absolute",
		left: "7.39%",
		bottom: "23.81%",
		color: "#FFFFFF",
	};
});

const Arrow = styled(ArrowForwardIcon)(({ theme }) => {
	return {
		position: "absolute",
		color: "#FFFFFF",
		bottom: "23.81%",
		right: "6%",
		fontSize: 28,
	};
});
