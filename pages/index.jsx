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
		>
			<Stack
				gap='24px'
			>
				<Box
					component='img'
					src='/logo/Logo-dark.png'
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
					Twitter? Instagram? Why not both?
				</Typography>
			</Stack>
			<Stack
				direction='row'
				gap='32px'
				sx={{
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