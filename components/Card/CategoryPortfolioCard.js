import * as React from "react";
import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { height } from "@mui/system";
import { styled } from "@mui/material/styles";

const CategoryPortfolioCard = () => {
	return (
		<Card sx={{ maxWidth: "100%" }} height='450px'>
			<CardActionArea>
				<CardContent>
					<Typography>#1</Typography>
					<Typography>#1</Typography>
					<Typography>#1</Typography>
					<Typography>#1</Typography>
					<Typography>#1</Typography>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};

export default CategoryPortfolioCard;

// Styled Sheet

const Card = styled(MuiCard)(({ theme }) => {
	return {
		position: "relative",
		background: "linear-gradient(0deg, #FFFFFF, #FFFFFF), #FFFAF5",
	};
});
