import React, {useState} from 'react';
import { makeStyles, Typography, Box } from '@material-ui/core';
import { useNavigate } from 'react-router-dom';
import GoogleLogin, { GoogleLoginResponse, GoogleLoginResponseOffline } from 'react-google-login';
import AlertModal from "../components/AlertModal";

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
    const [alertModal, setAlertModal] = useState<boolean>(false);

    const responseGoogle = async (response: GoogleLoginResponse | GoogleLoginResponseOffline) => {
        if ('tokenId' in response) {
            const tokenId = response.tokenId;
            // Send the tokenId to your server for verification
            const serverResponse = await fetch('/verifyToken', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({tokenId}),
            });

            if (serverResponse.ok) {
                const data = await serverResponse.json();
                // Verify the audience (client ID) in the server response
                const {profileObj} = response;
                const {googleId, email} = profileObj;
                const clientId = '392102598352-1p0p7al4qbboh7ce91fddashq95s1jm4.apps.googleusercontent.com';

                if (data.aud === clientId && data.sub === googleId) {
                    // Token is verified and client ID matches
                    setIsLoggedIn(true);
                    localStorage.setItem('isLoggedIn', 'true');
                    navigate('/question-center');
                } else {
                    setAlertModal(true);
                }
            }
        }
    }

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
            <AlertModal
                open={alertModal}
                onClose={() => {
                    setAlertModal(false);
                }}
                type={"error"}
                message={"oof"}
            />
        </div>
    );
}

export default Login;

