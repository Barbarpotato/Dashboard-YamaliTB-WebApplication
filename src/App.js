import './App.css';

import Sidebar from './Components/sidebar';
import React, { useState } from 'react';

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
    <div className='App'>
      {!validate ? <div className='text-center'>

        <div><h1 className='text-white text-5xl py-14 mb-24'>Yamali TB Admin</h1></div>
        <form onSubmit={handleSubmit}>
          <div>
            <input className='py-4 px-4 rounded w-96' placeholder='  Username...' type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </div>
          <div className='py-4'>
            <input className='py-4 px-4 rounded w-96' placeholder='  Password...' type="password" onChange={(e) => setPass(e.target.value)} value={pass} />
          </div>
          <div>
            <button className='rounded w-96 bg-red-500 text-white py-4 px-4 text-lg' type='submit'>Login</button>
          </div>
        </form>

      </div> : <></>
      }

      {validate ? <Sidebar></Sidebar> : <></>}

    </div >
  );
}

export default App;
