import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CgClose } from 'react-icons/cg';
import { useGetUser } from '../../hooks/user';
import { BiUser } from 'react-icons/bi';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 550,
  height: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 5,
};

export default function ProfileModal() {
  const  { data, isLoading, error } = useGetUser()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  return (
    <div>
      <button className='' onClick={handleOpen}><BiUser size={30}/></button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <CgClose onClick={handleClose}  className='text-2xl absolute right-5 top-4'/>
            <h1 className='text-center text-3xl text-blue-400'>User Profile</h1>
            <img className='rounded-full w-30 h-30 mx-auto mt-6' src="https://just2010.uz/upload/iblock/eab/0fig2ip6ltgo8htj9symjb6ekpzets9p.jpg" alt="s" />
            <p className='text-2xl text-center mt-4'>{data?.username} {data?.first_name}</p>
            <p className='text-xl text-center mt-2'>{data?.email}</p>
            <p className='text-center'>{data?.role}</p>
        </Box>
      </Modal>
    </div>
  );
}