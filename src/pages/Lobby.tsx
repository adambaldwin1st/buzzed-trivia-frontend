import React, { useState, useEffect } from 'react';
import { Button, TextField, Container, makeStyles, IconButton, Typography } from '@material-ui/core';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GamePiece from '../models/GamePiece';
import { BeeColors } from "../utils/types";

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    form: {
        width: '100%',
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    field: {
        marginBottom: theme.spacing(2),
        textAlign: 'center',
    },
    gamePieceContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: theme.spacing(2),
    },
    gamePiece: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    flipIcon: {
        transform: 'scaleX(-1)',  // This flips the icon horizontally
    },
    buttonsContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: theme.spacing(2),
    },
    colorText: {
        marginTop: theme.spacing(1),
        textAlign: 'center',
        textTransform: 'capitalize',
    },
    button: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
    },
    arrowButton: {
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        fontSize: '5rem',
    },
}));


const Lobby: React.FC = () => {
    const classes = useStyles();
    const [name, setName] = useState(localStorage.getItem('username') || '');
    const [colorIndex, setColorIndex] = useState<number>(
        localStorage.getItem('colorIndex') ? Number(localStorage.getItem('colorIndex')) : 0
    );

    const colors = Object.values(BeeColors) as BeeColors[];

    useEffect(() => {
        localStorage.setItem('username', name);
        localStorage.setItem('colorIndex', colorIndex.toString());
    }, [name, colorIndex]);

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    };

    const handleNextColor = () => {
        setColorIndex((colorIndex + 1) % colors.length);
    };

    const handlePreviousColor = () => {
        setColorIndex((colorIndex - 1 + colors.length) % colors.length);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(`Name is ${name} and color is ${colors[colorIndex]}`);
    };

    return (
        <Container className={classes.root}>
            <form className={classes.form} onSubmit={handleSubmit}>
                <TextField
                    className={classes.field}
                    label="Name"
                    value={name}
                    onChange={handleNameChange}
                    fullWidth
                />
                <div className={classes.gamePieceContainer}>
                    <IconButton onClick={handlePreviousColor} className={`${classes.arrowButton} ${classes.flipIcon}`}>
                        <PlayCircleIcon fontSize={'large'}/>
                    </IconButton>
                    <div>
                        <div className={classes.gamePiece}>
                            <GamePiece size={100} color={colors[colorIndex]} />
                        </div>
                        <Typography variant="subtitle1" className={classes.colorText}>
                            {colors[colorIndex].toUpperCase()}
                        </Typography>
                    </div>
                    <IconButton onClick={handleNextColor} className={classes.arrowButton}>
                        <PlayCircleIcon fontSize={'large'}/>
                    </IconButton>
                </div>
                <Button
                    className={classes.button}
                    variant="contained"
                    color="primary"
                    type="submit"
                    fullWidth
                >
                    Enter Game Room
                </Button>
            </form>
        </Container>
    );
};



export default Lobby;


