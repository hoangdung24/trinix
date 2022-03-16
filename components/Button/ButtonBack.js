import * as React from "react";
import ButtonMui from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import ButtonUnstyled, {
	buttonUnstyledClasses,
} from "@mui/base/ButtonUnstyled";

const ButtonBack = ({ position, title }) => {
	return (
		<CustomButton>
			<BackgroundSvg position={position}>
				<Image
					layout='fixed'
					src='/backbutton.svg'
					width='38px'
					height='32px'
				/>
			</BackgroundSvg>
			<Title variant='title2'>{title}</Title>
		</CustomButton>
	);
};

export default ButtonBack;

// Styled Sheet

const ButtonStyled = styled(ButtonMui)(({ theme }) => {
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

const CustomButtonRoot = styled("button")(({ theme }) => {
	return {
		padding: "12px 24px",
		borderRadius: "10px",
		transition: "all 150ms ease",
		cursor: "pointer",
		border: "none",
		position: "relative",

		"&:hover": {
			backgroundColor: "rgba(255,255,255, 0.6)",
		},

		"&.${buttonUnstyledClasses.active}": {
			backgroundColor: "rgba(255,255,255, 0.7)",
		},

		"&.${buttonUnstyledClasses.focusVisible}": {
			boxShadow:
				"0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5)",
			outline: "none",
		},
	};
});

function CustomButton(props) {
	return <ButtonUnstyled {...props} component={CustomButtonRoot} />;
}
