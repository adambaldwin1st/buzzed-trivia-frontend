import React, {useState} from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import AlertModal from "../components/AlertModal";
import {GoogleLogin} from "@react-oauth/google";
import jwt from 'jwt-decode';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
    },
    heading: {
        marginBottom: theme.spacing(4),
    },
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: theme.spacing(2),
    },
    button: {
        width: '200px', // Adjust the width of the button
    },
}));

const Login: React.FC = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('isLoggedIn') === 'true');

    const handleLogin = (response: any) => {
        // TODO: replace this with a call to add the user to the database, or fetch existing one
        const decodedToken = jwt(response.credential);
        sessionStorage.setItem('user', JSON.stringify(decodedToken))
        setIsLoggedIn(true);
        navigate('/the-hive');
    }

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading}>
                Please Login
            </Typography>
            <Box className={classes.buttonContainer}>
                <div className={classes.button}>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            handleLogin(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed')
                        }}
                    />
                </div>
            </Box>
        </div>
    );
}

export default Login;

