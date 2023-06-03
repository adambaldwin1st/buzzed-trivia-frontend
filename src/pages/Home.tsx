import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

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
            <h1>Welcome!</h1>
            <div className={classes.buttonContainer}>
                <Button className={classes.button} variant="contained" color="primary">
                    Hosted Game
                </Button>
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
