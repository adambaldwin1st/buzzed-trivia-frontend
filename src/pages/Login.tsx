import React, {useState} from 'react';
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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(localStorage.getItem('isLoggedIn') === 'true');
    const responseGoogle = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('tokenId' in response) {
            const tokenId = response.tokenId;
            // Send the tokenId to your server for verification
            const serverResponse = await fetch('/verifyToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tokenId }),
            });

            if (serverResponse.ok) {
                const data = await serverResponse.json();
                // Verify the audience (client ID) in the server response
                const { profileObj } = response;
                const { googleId, email } = profileObj;
                const expectedClientId = 'your-google-oauth-client-id';

                if (data.aud === expectedClientId && data.sub === googleId) {
                    // Token is verified and client ID matches
                    setIsLoggedIn(true);
                    navigate('/login');

                    localStorage.setItem('isLoggedIn', 'true');
                } else {
                    // Invalid client ID or user ID, handle accordingly
                    console.log('Invalid client ID or user ID');
                }
            } else {
                // Server returned an error, handle accordingly
                console.log('Token verification failed');
            }
        } else {
            // Handle the case when the response is not of type GoogleLoginResponse
            console.log('Invalid login response');
        }
        // You can handle the Google OAuth response here
        navigate('/question-center')
    };

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
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

