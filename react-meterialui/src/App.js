import React from "react";
import "./App.css";
import { Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
    helloThereStyle: {
        fontStyle: "oblique",
        color: "red",
        fontSize: "30px",
    },
    buttonStlye: {
        color: "green",
        border: 0,
    },
});

function App() {
    const classes = useStyles();
    return (
        <div className="App">
            <Typography className={classes.helloThereStyle} variant="h1" color="primary">
                Hello there
            </Typography>
            <Button className={classes.buttonStlye} color="secondary" variant="outlined">
                THis is our first button
            </Button>
        </div>
    );
}

export default App;
