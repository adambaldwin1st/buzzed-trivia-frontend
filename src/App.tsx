import React, {useState} from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import theme from "./styles/theme"
import {AppBar, Button, CssBaseline, IconButton, makeStyles, ThemeProvider, Toolbar} from "@material-ui/core";
import QuestionCenter from "./pages/QuestionCenter";
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
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false); // Add login state here
    const [alertModal, setAlertModal] = useState<boolean>(false); // Add login state here
    const navigate = useNavigate(); // Move the useNavigate hook here


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

                        {isLoggedIn ? (
                            <Button className={classes.loginButton} color="inherit" onClick={() => {
                                setAlertModal(true);
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

                        <AlertModal open={alertModal} onClose={() => {
                            setAlertModal(false);
                        }} type={"success"} message={"oops"}
                        />
                    </Toolbar>
                </AppBar>
                <Toolbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/question-center" element={<QuestionCenter />} />
                </Routes>
            </div>
        </ThemeProvider>
    );
}

export default App;
