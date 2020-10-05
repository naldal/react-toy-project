import React from "react";
import CoffeeCarde from "./CoffeeCarde";
import { Grid } from "@material-ui/core";
import coffeeMakerList from "./constraint";

const Content = () => {
    const getCoffeeMakerCard = (coffeeMakerObj) => {
        return (
            <Grid item xs={12} sm={4}>
                <CoffeeCarde {...coffeeMakerObj} />
            </Grid>
        );
    };

    return (
        <Grid container spacing={2}>
            {coffeeMakerList.map((coffeeMakerObj) => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    );
};

export default Content;
