import { Stack } from "@mui/material";
import { Button, ButtonShape } from "../../components";

const ButtonTest = () => {
	return (
		<Stack spacing={2} direction='column'>
			<Button title='See our projects' isBackground={true} isIcon={true} />

			<Button title='See our projects' isIcon={false} isBackground={true} />

			<ButtonShape title='BACK' />
			<ButtonShape title='MORE' position='right' />
		</Stack>
	);
};

export default ButtonTest;
