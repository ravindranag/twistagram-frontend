import { createTheme, ThemeProvider } from "@mui/material";
import { typography } from "../../theme/typography";

const theme = createTheme({
    typography: typography
})

const Theme = ({children}) => {
    return (
        <ThemeProvider
            theme={theme}
        >
            {children}
        </ThemeProvider>
    )
}
 
export default Theme;