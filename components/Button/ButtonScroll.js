import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ArrowDownward from "@mui/icons-material/ArrowDownward";

const ButtonScroll = ({ title }) => {
	return (
		<ButtonStyled sx={{ textTransform: "unset" }}>
			<Title className='text' variant='title2'>
				{title}
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
		"&:hover .text": {
			textDecorationLine: "underline",
		},
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.black,
		paddingRight: 10,
	};
});

const Arrow = styled(ArrowDownward)(({ theme }) => {
	return {
		fontSize: 28,
	};
});
