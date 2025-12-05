import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { CgClose } from 'react-icons/cg';
import { TiWarning, TiWarningOutline } from 'react-icons/ti';
import { useGetNotify } from '../../hooks/Notify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 4,
  p: 5,
};

export default function NotifyModal({ children, id, message }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const notify = useGetNotify();
  const daleteCategory = () => {
    notify('ok', `kategoriya o'chirildi ${id}`)
  }

  return (
    <div>
      <button className='top-6' onClick={handleOpen}>{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CgClose onClick={handleClose} className='text-2xl absolute right-5 top-4' />
          <div className='flex justify-center'><TiWarningOutline className='text-8xl text-red-500' /></div>
          <p className='text-2xl text-center mt-4 text-gray-500'>
            {message}
          </p>
          
          <div className='mt-8 flex justify-center gap-10'>
            <button onClick={handleClose} className=' text-xl bg-red-600 w-35 py-2 rounded-2xl text-white'>Bekor qilish</button>
            <button onClick={daleteCategory} className='text-xl bg-green-500 w-35 py-2 rounded-2xl text-white'>Tasdiqlash</button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}