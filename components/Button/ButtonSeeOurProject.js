import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { useState } from "react";

const ButtonSeeOurProject = ({ title, isBackground }) => {
	return (
		<ButtonStyled sx={{ textTransform: "unset" }} isBackground={isBackground}>
			<Title className='text' variant='title2'>
				{title}
			</Title>
			<Arrow />
		</ButtonStyled>
	);
};

export default ButtonSeeOurProject;

// Styled Sheet

const ButtonStyled = styled(Button)(({ theme, isBackground }) => {
	if (isBackground === true) {
		return {
			position: "relative",
			background: theme.palette.common.black,
			borderRadius: "10px",
			"&:hover": {
				background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
				boxShadow: "none",
			},
			"&:active": {
				boxShadow: "none",
				background: theme.palette.common.black,
			},
			"&:hover .text": {
				textDecorationLine: "underline",
			},
		};
	} else {
		return {
			position: "relative",
			"&:hover .text": {
				textDecorationLine: "underline",
			},
		};
	}
});

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
		paddingRight: 10,
		paddingLeft: 10,
	};
});

const Arrow = styled(ArrowForwardIcon)(({ theme }) => {
	return {
		color: theme.palette.common.white,
		fontSize: 28,
		paddingRight: 5,
	};
});
