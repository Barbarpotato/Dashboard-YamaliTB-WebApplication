import './App.css';
import Sidebar from './Components/sidebar';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [validate, setValidate] = useState(false);

  //! Data Dummy for validation.
  const data = ['Darma', "123"];

  //? Prevent User accessing from the mobile state.
  const [width, setWidth] = useState(window.innerWidth);

  //? tracking the width screen size.
  useEffect(() => {
    //? Keep tracking the windowd width size.
    window.addEventListener("resize", () => setWidth(window.innerWidth))

    //? Cleaning up the eventListener after component its no longer needed.
    return () => {
      window.removeEventListener("resize", () => setWidth(window.innerWidth))
    }
  }, [])

  //? Handling form submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    let username = e.target[0].value;
    let password = e.target[1].value;
    let saveUsername = '';
    let savePass = '';
    //? validate user if the username and password correct
    //? then user will be ask to save the sensitive information or not.
    //? if it yes then whenever user will be logout, the username and pass will be saved.
    //? whenever tab is closed the variable will remove from the storage.
    if (username === data[0] && password === data[1]) {
      if (!sessionStorage.getItem('username') && !sessionStorage.getItem('password')) {
        if (!sessionStorage.getItem('username')) {
          saveUsername = window.confirm('Apakah Anda Ingin Menyimpan Username selama Mengakses Aplikasi?')
          if (saveUsername) {
            sessionStorage.setItem('username', username);
          }
        }
        if (!sessionStorage.getItem('password')) {
          savePass = window.confirm('Apakah Anda Ingin Menyimpan Password selama Mengakses Aplikasi?')
          if (savePass) sessionStorage.setItem('password', password);
        }
      }
      setValidate(true);
    }

    else if (!password && !username) {
      alert('Silahkan Isi Username dan Password!')
    }
    else if (!password) {
      alert('Password Belum Terisi')
    }
    else if (!username) {
      alert('Username Belum Terisi')
    }
    else {
      alert('Username Atau Password Salah!')
    }
  }

  if (width < 1020) {
    return (
      <div style={{ backgroundColor: 'rgb(39, 41, 61, 1)' }} className='fill-window'>
        <h1 className='mt-[50%] text-center font-medium text-5xl px-4'>❌</h1>
        <h1 className=' px-16 py-4 text-red-500 text-center text-2xl font-semibold'>Sepertinya Anda Mengakses Aplikasi Lewat Perangkat Seluler. Mohon Gunakan Perangkat Laptop
          atau Komputer Untuk Mengelola Data Dengan Pengalaman Pengguna Yang Lebih Baik!
        </h1>
      </div>
    )
  }

  return (
    <div
      className={!validate ? 'fill-window' : ''
      }>
      {!validate ? <motion.div
        initial={{ opacity: 0, y: -200 }}
        whileInView={{ opacity: 1, y: 20 }}
        transition={{
          delay: 0.5,
          x: { duration: 1 },
          default: { ease: "linear" }
        }}
        className='text-center'>
        <div><h1 className='text-white text-5xl py-14 mb-12 mt-12 font-bold'>Selamat Datang Kembali <br></br></h1></div>
        <form onSubmit={handleSubmit}>
          <div>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              transition={{
                type: 'spring'
              }}
              defaultValue={sessionStorage.getItem('username')}
              className='py-4 px-4 rounded w-96' placeholder='  Nama Pengguna...' type="text" />
          </div>
          <div className='py-4'>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              transition={{
                type: 'spring'
              }}
              defaultValue={sessionStorage.getItem('password')}
              className='py-4 px-4 rounded w-96' placeholder='  Kata Sandi...' type="password" />
          </div>
          <div>
            <motion.button
              whileHover={{ scale: 1.2 }}
              transition={{
                type: 'spring'
              }}
              className='rounded w-96 bg-green-500 text-white py-4 px-4 text-lg' type='submit'>Masuk</motion.button>
          </div>
        </form>
      </motion.div> : <></>
      }
      {validate ? <Sidebar></Sidebar> : <></>}
    </div>
  );
}

export default App;
