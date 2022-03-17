import React from "react";
import { Box as BoxMui, styled, Typography, Grid, Stack } from "@mui/material";
import { Image } from "../../hoc";
import { Button } from "../Button";

const IMAGE_SRC = "/popupimage.svg";

const SIZE = 20;

const Popup = () => {
	return (
		<Wraper container spacing={2}>
			<Content item xs={4} sm container direction='column' spacing={4}>
				<ContentItem item>
					<Title>Contact Us</Title>
				</ContentItem>

				<Grid item>
					<ContentItem>
						<SubTitle variant='categoryBold'>Address:</SubTitle>
					</ContentItem>
					<ContentItem>
						<Text>158/20 Hoàng Hoa Thám, phường 12, quận Tân Bình</Text>
					</ContentItem>
				</Grid>

				<Grid item>
					<ContentItem>
						<SubTitle variant='categoryBold'>Contact Info:</SubTitle>
					</ContentItem>
					<ContentItem>
						<Text>Hotline: (+84) 989 743 598</Text>
						<Text>Email: contact@trinix.studio</Text>
					</ContentItem>
				</Grid>

				<Grid item>
					<ContentItem>
						<SubTitle variant='categoryBold'>Social Network:</SubTitle>
					</ContentItem>
					<ContentItem>
						<Stack
							direction={"row"}
							alignItems={"center"}
							spacing={4}
							position='relative'>
							<Image src='/linkedin.svg' height={SIZE} width={SIZE} />

							<Image src='/instagram.svg' height={SIZE} width={SIZE} />

							<Image src='/facebook.svg' height={SIZE} width={SIZE} />

							<Image src='/vimeo.svg' height={SIZE} width={SIZE} />

							<Image src='/youtube.svg' height={SIZE} width={SIZE} />

							<Image src='/tiktok.svg' height={SIZE} width={SIZE} />
						</Stack>
					</ContentItem>
				</Grid>

				<Grid item>
					<Box>
						<Button title='WORK WITH US' isIcon={false} isBackground={false} />
					</Box>
				</Grid>
			</Content>
			<Grid item xs={8}>
				<Image src={IMAGE_SRC} width='942px' height='722px' />
			</Grid>
		</Wraper>
	);
};

export default Popup;

// Styled Sheet

const Wraper = styled(Grid)(({ theme }) => {
	return {
		position: "relative",
		background: theme.palette.common.black,
	};
});

const Content = styled(Grid)(({ theme }) => {
	return {
		justifyContent: "center",
	};
});

const Box = styled(BoxMui)(({ theme }) => {
	return {
		paddingLeft: "40px",
	};
});

const ContentItem = styled(Grid)(({ theme }) => {
	return {
		justifyContent: "center",
		paddingLeft: "50px",
	};
});

const Title = styled(Typography)(({ theme }) => {
	return {
		paddingLeft: "50px",
		background: "linear-gradient(180deg, #FC5493 0%, #8303D8 100%)",
		WebkitBackgroundClip: "text",
		WebkitTextFillColor: "transparent",
		backgroundClip: "text",
		fontFamily: theme.typography.fontFamily,
		fontSize: "70px",
		fontWeight: "700",
	};
});

const SubTitle = styled(Typography)(({ theme }) => {
	return {
		color: theme.palette.common.white,
	};
});

const Text = styled(Typography)(({ theme }) => {
	return {
		color: "rgba(255, 255, 255, 0.65)",
		fontFamily: theme.typography.fontFamily,
		fontSize: "13px",
		fontWeight: "400",
	};
});
