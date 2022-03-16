import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import { transform } from "lodash";

const ButtonBack = ({ position, title }) => {
	return (
		<ButtonStyled>
			<BackgroundSvg position={position}>
				<Image
					layout='fixed'
					src='/backbutton.svg'
					width='38px'
					height='32px'
				/>
			</BackgroundSvg>
			<Title variant='title2'>{title}</Title>
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
		color: theme.palette.common.black,
	};
});

const BackgroundSvg = styled("span")(({ theme, position }) => {
	if (position === "right") {
		return {
			transform: "scaleX(-1)",
		};
	} else {
		return {};
	}
});
