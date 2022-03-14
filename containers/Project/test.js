import { Stack } from "@mui/material";
import {
	ButtonSeeOurProject,
	ButtonScroll,
	ButtonBack,
	ButtonMore,
} from "../../components";

const ButtonTest = () => {
	return (
		<Stack spacing={2} direction='column'>
			<ButtonSeeOurProject />
			<ButtonScroll />
			<ButtonBack />
			<ButtonMore />
		</Stack>
	);
};

export default ButtonTest;
