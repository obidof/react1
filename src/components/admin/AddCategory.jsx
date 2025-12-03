import { outlinedInputClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { CgClose } from 'react-icons/cg';
import MiniLoader from '../Loader/MiniLoader';
import { useGetNotify } from '../../hooks/Notify';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  outline: 'none',
  p: 4,
};

export default function AddCategory({ children }) {
  const notify = useGetNotify();

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [icontext, setIcontext] = useState("");
  const [categoryname, setCategoryname] = useState("");


  //loader Sumbit
  const [Loading, setLoading] = useState();

  const handleRegisterSumbit = (e) => {
    e.preventDefault()
    const categoryData = {
      icontext,
      categoryname,
    };
    console.log(categoryData);
    
  };

  return (
    <div>
      <div className='h-full' onClick={handleOpen}>{children}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledb y="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
          <Box sx={style}>
            <CgClose onClick={handleClose} className='absolute right-5 top-5 text-blue-400 cursor-pointer' size={20} />
            <form onSubmit={handleRegisterSumbit} className='space-y-3'>
              <h1 className='text-3xl text-center text-blue-400'>Add Category</h1>
              <input onChange={(e) => setIcontext(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="file" placeholder='image' />
              <input onChange={(e) => setCategoryname(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="text" placeholder='Category Name' />
              <button className={`py-2 px-8 rounded-xl cursor-pointer text-white text-xl ${Loading ? 'bg-blue-300 active:scale-100' : 'bg-blue-400 active:scale-90'} flex items-center gap-3`} disabled={Loading}>{Loading ? <MiniLoader /> : "Sumbit"}</button>
            </form>
          </Box>
      </Modal>
    </div>
  );
}