import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import { Image } from "../../hoc";

import { Button } from "../Button";
import BoxMui from "@mui/material/Box";

const DURATION = "all 2s";

const CategoryPortfolioCard = ({ id, title, subTitle, imageSrc }) => {
	return (
		<Card>
			<CardContent className='card'>
				<BackgroundSvg className='backgroundsvg'>
					<Image
						layout='fixed'
						src='/backbutton.svg'
						width='67px'
						height='58px'
					/>
					<Number variant='h2'>{id}.</Number>
				</BackgroundSvg>
				<Title className='title' variant='h2' sx={{ height: 49, width: 241 }}>
					{title}
				</Title>
				<Line className='line' sx={{ width: 400 }}>
					<hr color='#000000'></hr>
				</Line>
				<SubTitle
					className='subTitle'
					variant='bodyText'
					sx={{ width: 158, height: 32 }}>
					{subTitle}
				</SubTitle>
				<ButtonSee className='button'>
					<Button title='See our projects' isBackground={true} />
				</ButtonSee>
				<ImageBackground className='image'>
					<Image
						layout='fixed'
						className='image'
						src={imageSrc}
						width='468px'
						height='325px'
					/>
				</ImageBackground>
				<Polygon className='polygon'>
					<Image
						layout='fixed'
						className='polygon'
						src='/polygon.svg'
						width='568px'
						height='492px'
					/>
				</Polygon>
			</CardContent>
		</Card>
	);
};

export default CategoryPortfolioCard;

// Styled Sheet

const Card = styled(BoxMui)(({ theme }) => {
	return {
		position: "relative",
		width: "100%",
		height: 450,
		background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFAF5",
		"&:hover": {
			background: "rgba(1, 16, 33, 0.1)",
		},
		"&:hover .backgroundsvg": {
			transform: "translateX(100px)",
		},
		"&:hover .title": {
			transform: "translateX(100px)",
		},
		"&:hover .subTitle": {
			transform: "translateX(100px)",
		},
		"&:hover .button": {
			transform: "translateX(100px)",
		},
		"&:hover .line": {
			transform: "translateX(0px)",
		},
		"&:hover .image": {
			transform: "translateX(0px)",
			opacity: 1,
		},
		"&:hover .polygon": {
			transform: "translateX(0px)",
			opacity: 1,
		},
	};
});

const BackgroundSvg = styled("span")(({ theme }) => {
	return {
		position: "absolute",
		right: "83%",
		top: "20%",
		transform: "translateX(0px)",
		transition: DURATION,
	};
});

const Number = styled(Typography)(({ theme }) => {
	return {
		position: "absolute",
		top: "15%",
		right: "0%",
	};
});

const ButtonSee = styled("span")(({ theme }) => {
	return {
		position: "absolute",
		top: "50%",
		right: "30%",
		transition: DURATION,
		zIndex: 3,
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		position: "absolute",
		top: "30%",
		right: "65%",
		background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		backgroundClip: "text",
		height: "fit-content",
		width: "fit-content",
		transition: DURATION,
	};
});

const Line = styled("div")(({ theme }) => {
	return {
		position: "absolute",
		top: "50%",
		left: "0%",
		border: "1px",
		transition: DURATION,
		transform: "translateX(-100px)",
	};
});

const SubTitle = styled(Typography)(({ theme }) => {
	return {
		position: "absolute",
		top: "48%",
		right: "65%",
		transition: DURATION,
		textAlign: "right",
	};
});

const ImageBackground = styled("div")(({ theme }) => {
	return {
		position: "absolute",
		top: "21%",
		right: "7%",
		transition: DURATION,
		transform: "translateX(100px)",
		zIndex: 2,
		opacity: 0,
	};
});

const Polygon = styled("div")(({ theme }) => {
	return {
		position: "absolute",
		top: "0%",
		right: "-10.5%",
		transition: DURATION,
		transform: "translateX(100px)",
		zIndex: 1,
		opacity: 0,
	};
});

const CardContent = styled(BoxMui)(({ theme }) => {
	return {
		position: "absolute",
		width: "100%",
		height: "100%",
	};
});
