import { outlinedInputClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import { BiBorderRadius } from 'react-icons/bi';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: 2,
    outline: 'none',
};

console.log(Modal)

export default function Login({ children }) {
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
                <button onClick={handleOpen}>{children}</button>            
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1>Ro'yhatdan o'tish</h1>
                    <input type="text" placeholder='name' required  />
                </Box>
            </Modal>
        </div>
    );
}