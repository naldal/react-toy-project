import { AppBar, Grid, Toolbar, Card, CardContent, CircularProgress, CardMedia, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React, { useState } from "react";
import mockData from "./mockData";
import { toFirstCharUppercase } from "./constants";
const useStyles = makeStyles({
    pokedexContainer: {
        paddingTop: "20px",
        paddingLeft: "50px",
        paddingRight: "50px",
    },
    CardMedia: {
        margin: "auto",
    },
    CardContent: {
        textAlign: "center",
    },
});

const Pokedex = (props) => {
    const { history } = props;
    const classes = useStyles();
    const [pokemonData, setPokemonData] = useState(mockData);

    const getPokemonCard = (pokemonId) => {
        console.log(pokemonData[`${pokemonId}`]);
        const { id, name } = pokemonData[`${pokemonId}`];
        const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;

        return (
            <Grid item xs={12} sm={4} key={pokemonId}>
                <Card onClick={() => history.push(`/${pokemonId}`)}>
                    <CardMedia className={classes.CardMedia} image={sprite} style={{ width: "130px", height: "130px" }}></CardMedia>
                    <CardContent className={classes.CardContent}>
                        <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
                    </CardContent>
                </Card>
            </Grid>
        );
    };
    return (
        <>
            <AppBar position="static">
                <Toolbar />
            </AppBar>
            {pokemonData ? (
                <Grid container className={classes.pokedexContainer} spacing={2}>
                    {Object.keys(pokemonData).map((pokemonId) => getPokemonCard(pokemonId))}
                </Grid>
            ) : (
                <CircularProgress />
            )}
        </>
    );
};

export default Pokedex;
