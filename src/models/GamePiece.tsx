import React from 'react';
import { makeStyles } from '@material-ui/core';
import { BeeColors } from "../utils/types";
import blueBeeImage from '../images/icons/bees/bee-blue.png';
import greenBeeImage from '../images/icons/bees/bee-green.png';
import orangeBeeImage from '../images/icons/bees/bee-orange.png';
import pinkBeeImage from '../images/icons/bees/bee-pink.png';
import purpleBeeImage from '../images/icons/bees/bee-purple.png';
import redBeeImage from '../images/icons/bees/bee-red.png';
import whiteBeeImage from '../images/icons/bees/bee-white.png';
import yellowBeeImage from '../images/icons/bees/bee-yellow.png';

const useStyles = makeStyles((theme) => ({
    gamePiece: {
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    image: {
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

interface GamePieceProps {
    size: number;
    color: BeeColors;
    className?: string; // Added className prop
}

const getIconPath = (color: BeeColors) => {
    switch (color) {
        case BeeColors.Blue:
            return blueBeeImage;
        case BeeColors.Green:
            return greenBeeImage;
        case BeeColors.Orange:
            return orangeBeeImage;
        case BeeColors.Pink:
            return pinkBeeImage;
        case BeeColors.Purple:
            return purpleBeeImage;
        case BeeColors.Red:
            return redBeeImage;
        case BeeColors.White:
            return whiteBeeImage;
        case BeeColors.Yellow:
            return yellowBeeImage;
        default:
            return '';
    }
};

const GamePiece: React.FC<GamePieceProps> = ({ size, color, className }) => {
    const classes = useStyles();
    const icon = getIconPath(color);

    return (
        <div className={`${classes.gamePiece} ${className}`} style={{ width: size, height: size }}>
            {icon && <img src={icon} alt={`Icon for ${color}`} className={classes.image} />}
        </div>
    );
};

export default GamePiece;
