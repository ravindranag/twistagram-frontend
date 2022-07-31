import { Stack } from "@mui/material";
import Footer from "../footer/Footer";

const AuthLayout = ({children}) => {
    return (
        <Stack
            padding='32px'
            gap='24px'
            sx={{
                minHeight: '100vh'
            }}
        >
            {children}
            <Footer />
        </Stack>
    )
}
 
export default AuthLayout