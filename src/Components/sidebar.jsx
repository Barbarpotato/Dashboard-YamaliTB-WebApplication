import '../Styles/sidebar.css'
import Beranda from './Beranda';
import Content from './Kasus';
import AddBerita from './AddBerita';
import DelBerita from './DelBerita';

import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Routes, Route, Link } from 'react-router-dom';

function sidebar() {

    return (
        <div id='' style={{ display: 'flex', height: '100%' }}>
            <Sidebar width={window.screen.width < 500 ? '150px' : '250px'} backgroundColor='rgb(39, 41, 61, 1)' style={{ 'height': '100vh' }}>
                <Menu >
                    <MenuItem disabled={true} style={{ "color": 'white', 'marginBottom': 25, 'textAlign': 'center' }} >Dashboard</MenuItem>
                    <MenuItem routerLink={<Link to="/Beranda"></Link>} className='menu'>Beranda</MenuItem>
                    <SubMenu className='submenu' label="Artikel">
                        <MenuItem className='menu text-center'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                        <MenuItem className='menu text-center'><i className="fa fa-trash" aria-hidden="true"></i>   Hapus Data</MenuItem>
                    </SubMenu>
                    <SubMenu className='submenu' label='Berita'>
                        <MenuItem routerLink={<Link to="/TambahBerita"></Link>} className='menu text-center'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                        <MenuItem routerLink={<Link to='/HapusBerita'></Link>} className='menu text-center'><i className="fa fa-trash" aria-hidden="true"></i>   Hapus Data</MenuItem>
                    </SubMenu>
                    <MenuItem routerLink={<Link to='/Kasus' />} className='menu'>Kasus</MenuItem>
                    <MenuItem className='menu'>Pasien </MenuItem>
                </Menu>
            </Sidebar >

            <Routes>
                <Route exact path='/Kasus' element={<Content></Content>}></Route>
                <Route exact path='/TambahBerita' element={<AddBerita></AddBerita>}></Route>
                <Route exact path='/HapusBerita' element={<DelBerita></DelBerita>}></Route>
                <Route exact path='/Beranda' element={<Beranda></Beranda>}></Route>
            </Routes>

        </div>
    );
}

export default sidebar;
