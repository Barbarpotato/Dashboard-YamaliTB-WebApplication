import React from 'react';


function AddBerita() {
    return (
        <div className='flex' style={{ overflowY: 'scroll', height: '100vh', width: '100%' }}>

            <form className='mx-[30%]'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl py-12'>Tambah Berita Halaman di Website</h1>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Tanggal Berita:</label>
                    <input style={{ width: '500px' }} type='text' placeholder='yyyy-mm-dd'></input>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Waktu: </label>
                    <input style={{ width: '500px' }} type='text' placeholder='yyyy-mm-dd-hh-mm-ss'></input>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Judul </label>
                    <input style={{ width: '500px' }} type='text' placeholder='Yamali TB'></input>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Deksripsi Berita 1: </label>
                    <textarea style={{ width: '500px', height: '500px', border: 'solid 2px black' }} className='w-96 h-96' type='text' placeholder='Deksripsi Berita 1'></textarea>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Gambar 1: </label>
                    <input className='' type='text' placeholder='Link Gambar 1'></input>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Deksripsi Berita 2: </label>
                    <textarea style={{ width: '500px', height: '500px', border: 'solid 2px black' }} type='text' placeholder='Deksripsi Berita 2'></textarea>
                </div>
                <div className='flex flex-col'>
                    <label className=''>Gambar 2: </label>
                    <input style={{ width: '500px' }} type='text' placeholder='Link Gambar 2'></input>
                </div>
                <div className='py-4'>
                    <button style={{ width: '500px' }} className='rounded bg-green-500 text-white mt-12 py-4 px-4 text-lg' type='submit'>
                        Publikasi Berita</button>
                </div>
            </form>
        </div>
    )
}

export default AddBerita;