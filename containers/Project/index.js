import {
	PortfolioCard,
	CategoryPortfolioCard,
	BottomLogo,
} from "../../components";
import { Stack } from "@mui/material";
import { styled } from "@mui/styles";

const Project = () => {
	return (
		<StyledStack spacing={8} direction='column'>
			<PortfolioCard />
			<CategoryPortfolioCard
				id='1'
				title='2D Projects'
				subTitle='Artwork, Graphic Design, Photography'
				imageSrc='/hover1.svg'
			/>
			<CategoryPortfolioCard
				id='2'
				title='3D Projects'
				subTitle='Cinematic, Character, Artwork'
				imageSrc='/hover2.svg'
			/>
			<CategoryPortfolioCard
				id='3'
				title='Visual Effects'
				subTitle='TVC, Viral Videos, MV'
				imageSrc='/hover3.svg'
			/>
			<CategoryPortfolioCard
				id='4'
				title='UX/UI Design'
				subTitle='Application, Website, Game.'
				imageSrc='/hover4.svg'
			/>
			<BottomLogo />
		</StyledStack>
	);
};

export default Project;

// Styled Sheet
const StyledStack = styled(Stack)(({ theme }) => {
	return {
		position: "relative",
		width: "100%",
	};
});
