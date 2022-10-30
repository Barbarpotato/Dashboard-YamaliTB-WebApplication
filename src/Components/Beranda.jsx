import React from 'react';
import '../Styles/content.css';

function Beranda() {
    return (
        <div className='py-12 content'>
            <div className=''></div>
            <div className='flex flex-row'>
                <div className='bg-orange-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i className="fa fa-list pr-4" aria-hidden="true"></i>7</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Artikel Yamali</p>
                    </div>
                </div>

                <div className='bg-green-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-list-alt pr-4" aria-hidden="true"></i>10</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Berita Yamali</p>
                    </div>
                </div>

                <div className='bg-blue-400 w-72 h-36 mx-4 rounded-md  flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-stethoscope pr-4" aria-hidden="true"></i>300</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Kasus yang terdata pada Yamali TB</p>
                    </div>
                </div>
                <div className='bg-sky-900 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-plus-square pr-4" aria-hidden="true"></i>300</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Pasien yang terdata pada Yamali TB</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Beranda;