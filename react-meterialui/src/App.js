import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, createMuiTheme, Paper, ThemeProvider } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { purple } from "@material-ui/core/colors";
import TypographyDemo from "./TypographyDemo";

export default function IconButtons() {
    return (
        // <ThemeProvider>
        <Paper elevation="24" variant="outlined">
            <TypographyDemo />
        </Paper>
    );
}
