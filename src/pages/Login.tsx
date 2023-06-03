import React from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';

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
    const responseGoogle = (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        console.log(response);
        // You can handle the Google OAuth response here
        navigate('/question-center')
    };

    return (
        <div className={classes.root}>
            <Typography variant="h3" className={classes.heading}>
                Please Login
            </Typography>
            <Box className={classes.buttonContainer}>
                <GoogleLogin
                    clientId="392102598352-1p0p7al4qbboh7ce91fddashq95s1jm4.apps.googleusercontent.com"
                    buttonText="Login with Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    className={classes.button}
                />
            </Box>
        </div>
    );
};

export default Login;

