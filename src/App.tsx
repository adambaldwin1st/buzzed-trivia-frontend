import React, { useState } from 'react';
import {Route, Routes, useNavigate} from 'react-router-dom';
import Login from "./pages/Login";
import Home from "./pages/Home";
import theme from "./styles/theme"
import { AppBar, CssBaseline, IconButton, makeStyles, ThemeProvider, Toolbar, Typography, Button } from "@material-ui/core";
import { Menu as MenuIcon } from '@material-ui/icons';
import QuestionCenter from "./pages/QuestionCenter";

const useStyles = makeStyles((theme) => ({
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2)
    },
    title: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loginButton: {
        marginLeft: 'auto',
    },
}));

const App: React.FC = () => {
    const classes = useStyles();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Add login state here
    const navigate = useNavigate(); // Move the useNavigate hook here

    const handleLogin = () => {
        // Perform login logic here
        setIsLoggedIn(true);
        navigate('/login');
    };

    const handleLogout = () => {
        // Perform logout logic here
        setIsLoggedIn(false);
    };

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
                        >
                            <MenuIcon />
                        </IconButton>
                        <div className={classes.title}>
                            <Typography variant="h6">Buzzed Trivia</Typography>
                        </div>
                        {isLoggedIn ? (
                            <Button color="inherit" onClick={handleLogout}>
                                Logout
                            </Button>
                        ) : (
                            <Button color="inherit" onClick={handleLogin} className={classes.loginButton}>
                                Login
                            </Button>
                        )}
                    </Toolbar>
                </AppBar>
                <Toolbar /> {/* Add a spacer to push the content below the top bar */}
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
