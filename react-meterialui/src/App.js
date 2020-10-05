import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        color: "red",
        border: "none",
    },
}));

export default function IconButtons() {
    const classes = useStyles();

    return (
        <>
            <Button
                classes={{
                    root: classes.root,
                }}
                // className={classes.root}
                variant="outlined"
                color="primary"
                size="small"
            >
                Small fuckin button
            </Button>
        </>
    );
}
