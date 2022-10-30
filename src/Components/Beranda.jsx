import React from 'react';
import '../Styles/content.css';

function Beranda() {
    return (
        <div className='py-12 content'>
            <div className=''></div>
            <div className='flex flex-row'>
                <div className='bg-orange-400 w-72 h-36 mx-4 rounded-md'>Hello</div>
                <div className='bg-green-400 w-72 h-36 mx-4 rounded-md'>Hello</div>
                <div className='bg-blue-400 w-72 h-36 mx-4 rounded-md'>Hello</div>
                <div className='bg-sky-900 w-72 h-36 mx-4 rounded-md'>Hello</div>
            </div>
        </div>
    )
}

export default Beranda;