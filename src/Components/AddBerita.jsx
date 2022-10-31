import React from 'react';

function AddBerita() {
    return (
        <div className='flex ' style={{ overflowY: 'scroll', height: '100vh', width: '100%' }}>
            <div className='mx-[20%]'>
                <form >
                    <div className='flex flex-col'>
                        <h1 className='text-3xl py-12 font-bold'>Tambah Berita Halaman di Website</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 flex flex-col items-start'>
                            <label className=''>Tanggal Berita:</label>
                            <input type='text' pattern='\d{4}-\d{2}-\d{2}' required placeholder='yyyy-mm-dd'></input>
                        </div>
                        <div className=' px-4 flex flex-col items-start'>
                            <label className=''>Waktu: </label>
                            <input pattern='\d{4}-\d{2}-\d{2}-\d{2}-\d{2}-\d{2}' title='data tidak valid' type='text' required placeholder='yyyy-mm-dd-hh-mm-ss'></input>
                        </div>
                        <div className='px-2 flex flex-col items-start'>
                            <label className=''>Judul </label>
                            <input type='text' required placeholder='Yamali TB'></input>
                        </div>
                    </div>
                    <div className='flex flex-col px-2'>
                        <label className='items-start py-2'>Deksripsi Berita 1: </label>
                        <textarea pattern='\w{30, }\s' title='data tidak valid' rows="5" required style={{ "overflow": "auto", border: 'solid 2px black' }} type='text' placeholder='Deksripsi Berita 1'></textarea>
                    </div>
                    <div className='flex flex-col px-2'>
                        <label className='items-start py-2'>Deksripsi Berita 2: </label>
                        <textarea pattern='\w{30, }' title='data tidak valid' rows="5" style={{ "overflow": "auto", border: 'solid 2px black' }} type='text' placeholder='Deksripsi Berita 2'></textarea>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 flex flex-col items-start'>
                            <label className='py-2'>Gambar 1: </label>
                            <input title='data tidak valid' required className='w-72' type='text' placeholder='Link Gambar 1'></input>
                        </div>
                        <div className='px-4 flex flex-col items-start'>
                            <label className='py-2'>Gambar 2: </label>
                            <input className='w-72' type='text' placeholder='Link Gambar 2'></input>
                        </div>
                    </div>
                    <div className='py-12'>
                        <button style={{ width: '300px' }} className='rounded bg-green-500 text-white py-4 px-4 text-lg' type='submit'>
                            Publikasi</button>
                    </div>
                </form >
            </div>
        </div >
    )
}

export default AddBerita;