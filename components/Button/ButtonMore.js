import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const ButtonMore = () => {
	return (
		<ButtonStyled>
			<Title variant='title2'>MORE</Title>
			<BackgroundSvg>
				<Image
					layout='fixed'
					src='/morebutton.svg'
					width='38px'
					height='32px'
				/>
			</BackgroundSvg>
		</ButtonStyled>
	);
};

export default ButtonMore;

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
		left: "0%",
		right: "27.27%",
		top: "18.75%",
		bottom: "6.25%",
		color: "#000000",
	};
});

const BackgroundSvg = styled("span")(({ theme }) => {
	return {
		position: "absolute",
		left: "50%",
		right: "-43.18%",
		top: "0%",
		bottom: "0%",
	};
});
