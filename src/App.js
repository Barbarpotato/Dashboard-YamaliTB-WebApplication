import './App.css';

import Sidebar from './Components/sidebar';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

function App() {

  const [validate, setValidate] = useState(false);

  // Catch name and password value from user input.
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  // Data Dummy for validation.
  const data = ['Darma', "123"]

  // Handling form submit.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === data[0] && pass === data[1]) {
      setValidate(true);
    }
    else if (!pass && !name) {
      alert('Silahkan Isi Username dan Password!')
    }
    else if (!pass) {
      alert('Password Belum Terisi')
    }
    else if (!name) {
      alert('Username Belum Terisi')
    }
    else {
      alert('Username Atau Passwrod Salah!')
    }
  }

  return (
    <div
      className={!validate ? 'fill-window' : ''}>
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
              className='py-4 px-4 rounded w-96' placeholder='  Nama Pengguna...' type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className='py-4'>
            <motion.input
              whileFocus={{ scale: 1.2 }}
              transition={{
                type: 'spring'
              }} className='py-4 px-4 rounded w-96' placeholder='  Kata Sandi...' type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
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

    </div >
  );
}

export default App;
