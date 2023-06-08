import React, {MouseEventHandler} from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography} from '@material-ui/core';
import {Clear} from "@material-ui/icons";

interface AlertModalProps {
    open: boolean;
    onClose: () => void;
    type: 'success' | 'error' | 'info';
    message: string;
}

const AlertModal: React.FC<AlertModalProps> = ({ open, onClose, type, message }) => {

    let buttonColor = '';

    // Set the button color based on the type prop
    if (type === 'success') {
        buttonColor = 'primary';
    } else if (type === 'error') {
        buttonColor = 'secondary';
    } else if (type === 'info') {
        buttonColor = 'default';
    }

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{type}</DialogTitle>
            <DialogContent>
                <Typography variant="body1">{message}</Typography>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" startIcon={<Clear />} onClick={() => {onClose()}}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AlertModal;

