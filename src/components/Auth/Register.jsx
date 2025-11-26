import { outlinedInputClasses } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import React, { useState } from 'react';
import { BiBorderRadius } from 'react-icons/bi';
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

export default function Register({ children }) {
  const notify = useGetNotify();

  //Tabs
  const [tab, setTab] = useState("register");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [username, setUserame] = useState("");
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //loader Sumbit
  const [Loading, setLoading] = useState();

  const handleRegisterSumbit = (e) => {
    e.preventDefault()
    const registerData = {
      username,
      firstname,
      email,
      password,
    }
    if (password.length < 6) {
      notify('err', "parol kamida 6 ta bo'lish kerak")
    }
    else {
      notify('ok', "Royhatdan muvaffaqiyatli o'tdingiz")
    }

    console.log(registerData);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }

  const handleLoginSumbit = (e) => {
    e.preventDefault()
    const LoginData = {
      username,
      password,
    }
    if (password.length < 6) {
      notify('err', "parol kamida 6 ta bo'lish kerak")
    }
    else {
      notify('ok', "Tizimga kirish muvaffaqiyatli")
    }

    console.log(LoginData);
    
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 2000);

  }
  return (
    <div>
      <button onClick={handleOpen}>{children}</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledb y="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        {tab == "register" ? <Box sx={style}>
          <CgClose onClick={handleClose} className='absolute right-5 top-5 text-blue-400 cursor-pointer' size={20} />
          <form onSubmit={handleRegisterSumbit} className='space-y-3'>
            <h1 className='text-3xl text-center text-blue-400'>Royhatdan o'tish</h1>
            <input onChange={(e) => setUserame(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="text" placeholder='Name' />
            <input onChange={(e) => setFirstname(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="text" placeholder='Firstname' />
            <input onChange={(e) => setEmail(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="Email" placeholder='Email' />
            <input onChange={(e) => setPassword(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="Password" placeholder='Password' />
            <button className={`py-2 px-8 rounded-xl cursor-pointer text-white text-xl ${Loading ? 'bg-blue-300 active:scale-100' : 'bg-blue-400 active:scale-90'} flex items-center gap-3`} disabled={Loading}>{Loading ? <MiniLoader /> : "Sumbit"}</button>
            <p className='text-center'>Royhatdan o'tganmisiz<a onClick={() => setTab("login")} href="Login" className='text-blue-400'>Login</a></p>
          </form>
        </Box> :
          <Box sx={style}>
            <CgClose onClick={handleClose} className='absolute right-5 top-5 text-blue-400 cursor-pointer' size={20} />
            <form onSubmit={handleLoginSumbit} className='space-y-3'>
              <h1 className='text-3xl text-center text-blue-400'>Login</h1>
              <input onChange={(e) => setUserame(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="text" placeholder='Name' />
              <input onChange={(e) => setPassword(e.target.value)} className='p-2 border outline-0 rounded-xl w-full inp ' type="Password" placeholder='Password' />
              <button className={`py-2 px-8 rounded-xl cursor-pointer text-white text-xl ${Loading ? 'bg-blue-300 active:scale-100' : 'bg-blue-400 active:scale-90'} flex items-center gap-3`} disabled={Loading}>{Loading ? <MiniLoader /> : "Sumbit"}</button>
              <p className='text-center'>Royhatdan o'tmaganmisiz<a onClick={() => setTab("register")} href="register" className='text-blue-400'>Register</a></p>
            </form>
          </Box>
        }

      </Modal>
    </div>
  );
}