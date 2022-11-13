import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Link } from 'react-router-dom';

import '../Styles/sidebar.css'
import Beranda from './Beranda';
import TambahKasus from './TambahKasus';
import Content from './Kasus';
import AddInfo from './AddInfo';
import DeleteInfo from './DeleteInfo';

function Sidebars() {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    // Artikel data that are going to showed to the client-side.
    const [artikel, setArtikel] = useState();

    // Calling the artikel data api.
    useEffect(() => {
        // Runs on the first render
        // And any time any dependency value changes
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_artikel.php')
            .then((response) => {
                setArtikel(response.data);
                setLoading(false);
            })
            .catch((err) => {
                return err;
            });
    }, []);

    if (isLoading) {
        return (
            <div className='text-center'>
                <h1 className='text-4xl text-center'>Memuat Data...</h1>
            </div>
        )
    }

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
                <Route exact path='/HapusArtikel' element={<DeleteInfo data={artikel}></DeleteInfo>}></Route>
                <Route exact path='/HapusBerita' element={<DeleteInfo tipe={'Berita'}></DeleteInfo>}></Route>
                <Route exact path='/Beranda' element={<Beranda></Beranda>}></Route>
                <Route exact path='/TambahKasus' element={<TambahKasus></TambahKasus>}></Route>
                <Route exact path='/Kasus' element={<Content></Content>}></Route>
            </Routes>

        </div>
    );
}

export default Sidebars;
