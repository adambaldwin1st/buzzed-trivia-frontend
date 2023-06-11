import React, { MouseEventHandler } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

interface AlertModalProps {
    open: boolean;
    onClose: () => void;
    title?: string;
    type: 'success' | 'error' | 'info';
    message: string;
    buttonContent?: string;
}

const useStyles = makeStyles({
    title: {
        fontSize: '2.2rem',
        fontWeight: 'bold',
        marginBottom: '0.5rem',
    },
    message: {
        fontSize: '2rem',
        marginBottom: '1.5rem',
    },
    actions: {
        display: 'flex',
        justifyContent: 'center',
    },
});

const AlertModal: React.FC<AlertModalProps> = ({ open, onClose, title, type, message, buttonContent = 'Okay' }) => {
    let buttonColor = '';

    // Set the button color based on the type prop
    if (type === 'success') {
        buttonColor = 'primary';
    } else if (type === 'error') {
        buttonColor = 'secondary';
    } else if (type === 'info') {
        buttonColor = 'default';
    }

    const classes = useStyles();

    const dialogStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };

    const actionsStyle = {
        display: 'flex',
        justifyContent: 'center',
    };

    return (
        <Dialog open={open} onClose={onClose} style={dialogStyle} fullWidth maxWidth="sm">
            {title && (
                <DialogTitle className={classes.title}>{title}</DialogTitle>
            )}
            <DialogContent>
                <Typography variant="body1" className={classes.message}>{message}</Typography>
            </DialogContent>
            <DialogActions style={actionsStyle}>
                <Button variant="contained" onClick={onClose}>
                    {buttonContent}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertModal;







