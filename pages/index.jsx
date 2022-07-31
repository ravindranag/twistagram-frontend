import { Box, Button, Stack, Typography } from "@mui/material"
import AuthLayout from "../components/layout/AuthLayout"

const Home = () => {
	return (
		<Stack
			sx={{
				flexGrow: 1
			}}
			justifyContent='center'
			gap='80px'
			alignItems='center'
		>
			<Stack
				gap='24px'
				alignItems='center'
			>
				<Box
					component='img'
					src='/logo/darklogo.png'
					width='100px'
				/>
				<Typography
					variant='h3'
				>
					Welcome to Twistagram
				</Typography>
				<Typography
					variant='body1'
				>
					Twitter? Instagram? What about both?
				</Typography>
			</Stack>
			<Stack
				direction='row'
				gap='32px'
				sx={{
					width: '100%',
					maxWidth: 480
				}}
			>
				<Button
					variant='contained'
					fullWidth
				>
					Sign Up
				</Button>
				<Button
					variant='outlined'
					fullWidth
				>
					Sign In
				</Button>
			</Stack>
		</Stack>
	)
}

Home.getLayout = function getLayout(page) {
	return (<AuthLayout>
		{page}
	</AuthLayout>)
}

export default Home