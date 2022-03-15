import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { stepClasses } from "@mui/material";

const ButtonSeeOurProject = () => {
	return (
		<ButtonStyled sx={{ textTransform: "unset" }}>
			<Title className='text' variant='title2'>
				See Our Projects
			</Title>
			<Arrow />
			<Border />
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
			border: "1px solid linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
			boxShadow: "none",
		},
		"&:active": {
			boxShadow: "none",
			background: "#000000",
			border: "1px solid linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
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

const Border = styled("div")(({ theme }) => {
	return {
		width: "100%",
		height: "100%",
		borderRadius: "10px",
		position: "absolute",
		zIndex: -1,
		transform: "scale(1.01)",
		transformOrigin: "center",
		background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
	};
});
