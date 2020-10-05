import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";
import TypographyDemo from "./TypographyDemo";

const theme = createMuiTheme({
    palette: {
        primary: purple,
    },
});

export default function IconButtons() {
    return (
        <ThemeProvider theme={theme}>
            <TypographyDemo />
        </ThemeProvider>
    );
}
