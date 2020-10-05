import { AppBar, makeStyles } from "@material-ui/core";
import React from "react";
import { Toolbar, Typography } from "@material-ui/core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

const useStyle = makeStyles(() => ({
    typographyStyles: {
        flex: 1,
    },
}));

const Header = () => {
    const classes = useStyle();

    return (
        <AppBar position="static">
            <Toolbar>
                <Typography className={classes.typographyStyles}>This is our header</Typography>
                <AcUnitIcon />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
