import { PortfolioCard, CategoryPortfolioCard } from "../../components";
import { Stack } from "@mui/material";

const Project = () => {
	return (
		<Stack spacing={2} direction='column'>
			<PortfolioCard />
			<CategoryPortfolioCard />
		</Stack>
	);
};

export default Project;
