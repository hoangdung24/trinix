import { Stack } from "@mui/material";
import {
	ButtonSeeOurProject,
	ButtonScroll,
	ButtonBack,
} from "../../components";

const ButtonTest = () => {
	return (
		<Stack spacing={2} direction='column'>
			<ButtonSeeOurProject title='See our projects' isBackground={true} />
			<ButtonScroll title='Scroll down' />
			<ButtonBack title='BACK' />
			<ButtonBack title='MORE' position='right' />
			<ButtonSeeOurProject title='Button' isBackground={true} />
		</Stack>
	);
};

export default ButtonTest;
