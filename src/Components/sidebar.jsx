import React from 'react';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Link } from 'react-router-dom';
import '../Styles/sidebar.css'
import Beranda from './Beranda';
import TambahKasus from './TambahKasus';
import Content from './Kasus';
import AddInfo from './AddInfo';
import DeleteInfo from './DeleteInfo';
import Guide from './Guide';
import {
    FiHome, FiBookOpen, FiFile,
    FiUsers, FiPlus, FiTrash, FiRefreshCcw,
    FiDollarSign
} from "react-icons/fi";
import { FaRegHospital, FaExclamation } from "react-icons/fa";

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
                    <SubMenu icon={<FaRegHospital></FaRegHospital>} className='submenu text-left' label='Kasus'>
                        <MenuItem icon={<FiPlus></FiPlus>} routerLink={<Link to="/TambahKasus"></Link>} className='menu text-left'> Tambah Data</MenuItem>
                        <MenuItem icon={<FiRefreshCcw></FiRefreshCcw>} routerLink={<Link to='/Kasus'></Link>} className='menu text-left'>Hapus & Edit Data</MenuItem>
                    </SubMenu>
                    <MenuItem icon={<FiDollarSign></FiDollarSign>}
                        className='menu text-left'><a href='https://docs.google.com/forms/d/12lQKJdN7bLKPJxvKJSKZIJikUq3Reu0ZbBY2HobJd-U/edit#responses'>Data Donasi Website</a></MenuItem>
                    <MenuItem icon={<FiUsers></FiUsers>} className='menu text-left'><a href='https://docs.google.com/forms/d/1nH2VMgOk5B1Tym4J0H0JP6Ir0YWVT6MCeniSsK0-fGk/edit#responses'>Data Pendaftaran Kader</a></MenuItem>
                    <MenuItem icon={<FaExclamation></FaExclamation>} routerLink={<Link to="/Petunjuk"></Link>} className='menu text-left'>Informasi Dashboard</MenuItem>
                </Menu>
            </Sidebar >

            <Routes>
                <Route index element={<Beranda></Beranda>}></Route>
                <Route exact path='/TambahArtikel' element={<AddInfo tipe={'Artikel'}></AddInfo>}></Route>
                <Route exact path='/TambahBerita' element={<AddInfo tipe={'Berita'}></AddInfo>}></Route>
                <Route exact path='/HapusArtikel' element={<DeleteInfo tipe={'Artikel'}></DeleteInfo>}></Route>
                <Route exact path='/HapusBerita' element={<DeleteInfo tipe={'Berita'}></DeleteInfo>}></Route>
                <Route exact path='/Beranda' element={<Beranda></Beranda>}></Route>
                <Route exact path='/TambahKasus' element={<TambahKasus></TambahKasus>}></Route>
                <Route exact path='/Kasus' element={<Content></Content>}></Route>
                <Route exact path='/Petunjuk' element={<Guide></Guide>}></Route>
            </Routes>
        </div >
    );
}

export default Sidebars;
