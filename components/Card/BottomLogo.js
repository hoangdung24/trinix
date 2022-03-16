import React from "react";
import { Image } from "../../hoc";
import { Button } from "../Button";
import styled from "@emotion/styled";
import { useState } from "react";
import BoxMui from "@mui/material/Box";

const DURATION = "all 2s";

const LOGO1 = "/bottomlogo1.svg";

const LOGO2 = "/bottomlogo.svg";

const BottomLogo = () => {
	const [isHovering, setHovering] = useState(false);
	const onMouseEnter = () => setHovering(true);
	const onMouseLeave = () => setHovering(false);
	return (
		<Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
			<ImageBackground className='imagebackground'>
				{isHovering ? (
					<Image
						className='image'
						src={LOGO2}
						width='732px'
						height='450px'
						layout='fixed'
					/>
				) : (
					<Image
						className='image'
						src={LOGO1}
						width='732px'
						height='450px'
						layout='fixed'
					/>
				)}
			</ImageBackground>
			<ButtonClick className='button'>
				<Button title='See our project' />
			</ButtonClick>
		</Wrapper>
	);
};

export default BottomLogo;

// Styled Sheet
const Wrapper = styled(BoxMui)(({ theme }) => {
	return {
		position: "relative",
		height: "100%",
		width: "100%",
		"&:hover": {
			background: theme.palette.common.black,
			transition: DURATION,
		},
		"&:hover .button": {
			opacity: 1,
		},
		"&:hover .imagebackground": {
			transform: "translateX(-100px)",
		},
		"&:hover .image": {},
	};
});

const ImageBackground = styled(BoxMui)(({ theme }) => {
	return {
		position: "relative",
		right: "-20%",
		transition: DURATION,
	};
});

const ButtonClick = styled("div")(({ theme }) => {
	return {
		position: "absolute",
		opacity: 0,
		transition: DURATION,
		top: "50%",
		right: "10%",
	};
});
