import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const ButtonScroll = () => {
	return (
		<ButtonStyled sx={{ textTransform: "unset" }}>
			<Title className='text' variant='title2'>
				Scroll down
			</Title>
			<Arrow />
		</ButtonStyled>
	);
};

export default ButtonScroll;

// Styled Sheet

const ButtonStyled = styled(Button)(({ theme }) => {
	return {
		position: "relative",
		background: "red",
		height: "60px",
		width: "280px",
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

const Arrow = styled(ArrowDownward)(({ theme }) => {
	return {
		position: "absolute",
		color: "#FFFFFF",
		bottom: "23.81%",
		right: "24%",
		fontSize: 28,
	};
});
