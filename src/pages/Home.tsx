import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import {Link} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
    button: {
        margin: theme.spacing(2),
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>Welcome to Buzzed Trivia! Under Construction</h1>
            <div className={classes.buttonContainer}>
                <Link to={"/lobby"}>
                    <Button className={classes.button} variant="contained" color="primary">
                        Hosted Game
                    </Button>
                </Link>
                <Button className={classes.button} variant="contained" color="primary">
                    Un-Hosted Game
                </Button>
            </div>
            <Button className={classes.button} variant="contained" color="primary">
                Join Game
            </Button>
        </div>
    );
};

export default Home;
