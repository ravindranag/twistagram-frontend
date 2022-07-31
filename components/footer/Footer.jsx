import { Divider, Stack, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Stack
            gap='24px'
            alignItems='center'
        >
            <Divider 
                flexItem
            />
            <Typography
                variant='body2'
            >
                &copy; Twistagram 2022
            </Typography>
        </Stack>
    )
}
 
export default Footer;