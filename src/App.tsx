import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import theme from "./styles/theme"
import {AppBar, Button, CssBaseline, IconButton, makeStyles, ThemeProvider, Toolbar} from "@material-ui/core";
import TheHive from "./pages/TheHive";
import SteinIcon from "./images/icons/SteinIcon";
import AlertModal from "./components/AlertModal";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    loginButton: {
        marginRight: theme.spacing(2),
        marginLeft: 'auto'
    },
}));

const App: React.FC = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [logoutModal, setLogoutModal] = useState<boolean>(false);
    const navigate = useNavigate();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <title>Buzzed Trivia</title>
            <div>
                <AppBar position="fixed" className={classes.appBar}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            className={classes.menuButton}
                            color="inherit"
                            aria-label="menu"
                            onClick={() => navigate('/')}
                        >
                            <SteinIcon
                                size={"md"}
                            />
                        </IconButton>

                        <div style={{flexGrow: 1}}/>

                        {sessionStorage.getItem('user') ? (
                            <Button className={classes.loginButton} color="inherit" onClick={() => {
                                setIsLoggedIn(false);
                                setLogoutModal(true);
                                sessionStorage.removeItem('user');
                                navigate('/');
                            }}>
                                Logout
                            </Button>
                        ) : (
                            <Button className={classes.loginButton} color="inherit" onClick={() => {
                                navigate('/login');
                            }}>
                                Login
                            </Button>
                        )}
                        <AlertModal open={logoutModal} onClose={() => {
                            setLogoutModal(false);
                        }} title={"Logout"} type={"success"} message={"You have been logged out."} buttonContent={"Okay"}
                        />
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/the-hive" element={<TheHive />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
