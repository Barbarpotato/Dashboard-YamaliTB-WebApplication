import './App.css';

import Sidebar from './Components/sidebar';
import { Routes, Route, Navigate, Link } from 'react-router-dom';

import React, { useState } from 'react';

function App() {

  const [validate, setValidate] = useState(false);

  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  // Data Dummy for validation.
  const data = ['Darma', "123"]

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === data[0] && pass === data[1]) {
      setValidate(true);
    }
    else {
      alert('password salah')
    }
  }

  return (
    <div>
      {!validate ? <div>
        <h1>Hello</h1>
        <form onSubmit={handleSubmit}>
          <label>Masukkan Username:
            <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
          </label>
          <label>Masukan Password:
            <input type="text" onChange={(e) => setPass(e.target.value)} value={pass} />
          </label>
          <button type='submit'>Enter</button>
        </form>
      </div> : <></>}

      {validate ? <Sidebar></Sidebar> : <></>}

    </div>
  );
}

export default App;
