import '../Styles/sidebar.css'
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';

function sidebar() {

    return (
        <div id='dashboard'>
            <Sidebar backgroundColor='rgb(39, 41, 61, 1)' style={{ 'height': '100vh' }}>
                <Menu >
                    <MenuItem disabled={true} style={{ "color": 'white', 'marginBottom': 25, 'textAlign': 'center' }} >Dashboard</MenuItem>
                    <SubMenu className='submenu' label="Menu 1">
                        <MenuItem className='menu'><i className='fa fa-plus'></i>  Tambah Data</MenuItem>
                    </SubMenu>
                    <MenuItem routerLink={<Link to='/Menu1' />} className='menu'> Menu 2 </MenuItem>
                    <MenuItem className='menu'> Menu 3 </MenuItem>
                    <MenuItem className='menu'> Menu 4 </MenuItem>
                    <MenuItem className='menu'> Menu 5 </MenuItem>
                </Menu>
            </Sidebar >
            <h1>hello</h1>
        </div>
    );
}

export default sidebar;
