import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CgClose } from 'react-icons/cg';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <Button className='absolute right-[-87%] top-6' onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CgClose onClick={handleClose}  className='text-2xl absolute right-5 top-4'/>
            <h1 className='text-center text-2xl text-blue-400'>Profile</h1>
            <img className='rounded-full w-30 mx-auto mt-2' src="https://di2ponv0v5otw.cloudfront.net/posts/2025/07/25/688436549f19e292722cbd2a/m_688600e47ac629cab0dd7cbd.jpg" alt="" />
            <p className='text-2xl text-center mt-2'>UserName.</p>
            <p className='text-xl text-center mt-2'>Email.</p>
        </Box>
      </Modal>
    </div>
  );
}