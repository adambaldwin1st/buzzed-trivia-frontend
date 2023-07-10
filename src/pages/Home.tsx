import React from 'react';
import { makeStyles, Button, Typography, useMediaQuery, Theme, Grid } from '@material-ui/core';
import { Link } from 'react-router-dom';
import SteinIcon from '../images/icons/SteinIcon';

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: theme.spacing(4),
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },
    title: {
        marginRight: theme.spacing(1),
        fontSize: '1.5rem',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            fontSize: '1.2rem',
        },
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
        width: '100%',
    },
    button: {
        margin: theme.spacing(2),
        width: '100%',
        height: '100%',
        [theme.breakpoints.up('sm')]: {
            maxWidth: '300px',
        },
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
        },
    },
}));

const Home: React.FC = () => {
    const classes = useStyles();
    const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('xs'));

    return (
        <div className={classes.root}>
            <div className={classes.titleContainer}>
                <Typography variant={isMobile ? 'h6' : 'h4'} className={classes.title}>
                    Buzzed Trivia
                </Typography>
                {!isMobile && <SteinIcon size="md" />}
            </div>
            <Grid container spacing={2} className={classes.buttonContainer}>
                <Grid item xs={12} sm={6}>
                    <Link to="/lobby" style={{ textDecoration: 'none' }}>
                        <Button className={classes.button} variant="contained" color="primary">
                            CREATE
                        </Button>
                    </Link>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Link to="/lobby" style={{ textDecoration: 'none' }}>
                        <Button className={classes.button} variant="contained" color="primary">
                            JOIN
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </div>
    );
};

export default Home;
