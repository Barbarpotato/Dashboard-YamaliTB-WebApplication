import './App.css';

import Sidebar from './Components/sidebar';
import Content from './Components/content';

import { Router, Routes, Route } from 'react-router-dom';

function App() {

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar />
      <Routes>
        <Route exact path='/Menu1' element={<Content></Content>}></Route>
      </Routes>
    </div>
  );
}

export default App;
