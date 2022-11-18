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
function Sidebars() {

    return (
        <div id='' style={{ display: 'flex', height: '100%' }}>
            <Sidebar width={window.screen.width < 500 ? '150px' : '250px'} backgroundColor='rgb(39, 41, 61, 1)' style={{ 'height': '100vh' }}>
                <Menu >
                    <MenuItem disabled={true} style={{ "color": 'white', 'marginBottom': 25, 'textAlign': 'center' }} >Dashboard</MenuItem>
                    <MenuItem routerLink={<Link to="/Beranda"></Link>} className='menu'>Beranda</MenuItem>
                    <SubMenu className='submenu' label="Artikel">
                        <MenuItem routerLink={<Link to='/TambahArtikel'></Link>} className='menu text-center'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                        <MenuItem routerLink={<Link to='/HapusArtikel'></Link>} className='menu text-center'><i className="fa fa-trash" aria-hidden="true"></i>   Hapus Data</MenuItem>
                    </SubMenu>
                    <SubMenu className='submenu' label='Berita'>
                        <MenuItem routerLink={<Link to="/TambahBerita"></Link>} className='menu text-center'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                        <MenuItem routerLink={<Link to='/HapusBerita'></Link>} className='menu text-center'><i className="fa fa-trash" aria-hidden="true"></i>   Hapus Data</MenuItem>
                    </SubMenu>
                    <SubMenu className='submenu' label='Kasus'>
                        <MenuItem routerLink={<Link to="/TambahKasus"></Link>} className='menu text-center'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                        <MenuItem routerLink={<Link to='/Kasus'></Link>} className='menu text-center'>Hapus & Edit Data</MenuItem>
                    </SubMenu>

                </Menu>
            </Sidebar >

            <Routes>
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
