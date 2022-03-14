import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const ButtonBack = () => {
	return (
		<ButtonStyled>
			<BackgroundSvg>
				<Image
					layout='fixed'
					src='/backbutton.svg'
					width='38px'
					height='32px'
				/>
			</BackgroundSvg>
			<Title variant='title2'>BACK</Title>
		</ButtonStyled>
	);
};

export default ButtonBack;

// Styled Sheet

const ButtonStyled = styled(Button)(({ theme }) => {
	return {
		position: "relative",
		width: "88px",
		height: "32px",
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		position: "absolute",
		left: "25.32%",
		right: "0%",
		top: "18.75%",
		bottom: "6.25%",
		color: "#000000",
	};
});

const BackgroundSvg = styled("span")(({ theme }) => {
	return {
		position: "absolute",
		left: "0%",
		right: "51.9%",
		top: "0%",
		bottom: "0%",
	};
});
