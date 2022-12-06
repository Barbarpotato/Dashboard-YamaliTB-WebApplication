import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Link } from 'react-router-dom';

import '../Styles/sidebar.css'
import Beranda from './Beranda';
import TambahKasus from './TambahKasus';
import Content from './Kasus';
import AddInfo from './AddInfo';
import DeleteArtikel from './DeleteArtikel';
import DeleteBerita from './DeleteBerita';
import {
    FiHome, FiBookOpen, FiFile,
    FiUsers, FiPlus, FiTrash, FiRefreshCcw
} from "react-icons/fi";

function Sidebars() {

    return (
        <div id='' style={{ display: 'flex', height: '100%' }}>
            <Sidebar width={window.screen.width < 500 ? '150px' : '250px'} backgroundColor='rgb(39, 41, 61, 1)' style={{ 'height': '100vh' }}>
                <Menu >
                    <MenuItem icon disabled={true} className='text-left text-white text-lg' style={{ "color": 'white' }} >Dasbor YamaliTb</MenuItem>
                    <MenuItem icon={<FiHome></FiHome>} routerLink={<Link to="/Beranda"></Link>} className='menu text-left'>Beranda</MenuItem>
                    <SubMenu icon={<FiFile></FiFile>} className='submenu text-left' label="Artikel">
                        <MenuItem icon={<FiPlus></FiPlus>} routerLink={<Link to='/TambahArtikel'></Link>} className='menu text-left'> Tambah Data</MenuItem>
                        <MenuItem icon={<FiTrash></FiTrash>} routerLink={<Link to='/HapusArtikel'></Link>} className='menu text-left'>Hapus Data</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FiBookOpen></FiBookOpen>} className='submenu text-left' label='Berita'>
                        <MenuItem icon={<FiPlus></FiPlus>} routerLink={<Link to="/TambahBerita"></Link>} className='menu text-left'> Tambah Data</MenuItem>
                        <MenuItem icon={<FiTrash></FiTrash>} routerLink={<Link to='/HapusBerita'></Link>} className='menu text-left'>Hapus Data</MenuItem>
                    </SubMenu>
                    <SubMenu icon={<FiUsers></FiUsers>} className='submenu text-left' label='Kasus'>
                        <MenuItem icon={<FiPlus></FiPlus>} routerLink={<Link to="/TambahKasus"></Link>} className='menu text-left'> Tambah Data</MenuItem>
                        <MenuItem icon={<FiRefreshCcw></FiRefreshCcw>} routerLink={<Link to='/Kasus'></Link>} className='menu text-left'>Hapus & Edit Data</MenuItem>
                    </SubMenu>
                </Menu>
            </Sidebar >

            <Routes>
                <Route index element={<Beranda></Beranda>}></Route>
                <Route exact path='/TambahArtikel' element={<AddInfo tipe={'Artikel'}></AddInfo>}></Route>
                <Route exact path='/TambahBerita' element={<AddInfo tipe={'Berita'}></AddInfo>}></Route>
                <Route exact path='/HapusArtikel' element={<DeleteArtikel ></DeleteArtikel>}></Route>
                <Route exact path='/HapusBerita' element={<DeleteBerita ></DeleteBerita>}></Route>
                <Route exact path='/Beranda' element={<Beranda></Beranda>}></Route>
                <Route exact path='/TambahKasus' element={<TambahKasus></TambahKasus>}></Route>
                <Route exact path='/Kasus' element={<Content></Content>}></Route>
            </Routes>

        </div>
    );
}

export default Sidebars;
