import React, { useState } from 'react';
import axios from 'axios';

function AddBerita({ tipe }) {

    const [judul, setJudul] = useState();
    const [berita1, setBerita1] = useState();
    const [gambar1, setGambar1] = useState();
    const [berita2, setBerita2] = useState();
    const [gambar2, setGambar2] = useState();

    const handleAddArtikel = (event) => {
        event.preventDefault();
        const date_init = new Date();
        let timestamp = '';
        let date = '';
        date += date_init.getFullYear() + '-' + date_init.getMonth() + '-' + date_init.getDate();
        timestamp += date + ' ' + date_init.getHours() + ':' + date_init.getMinutes() + ':' + date_init.getSeconds();
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_artikel/index.php',
            {
                tanggal: date, waktu: timestamp, judul: judul, isi_1: berita1, gambar_1: gambar1,
                isi_2: berita2, gambar_2: gambar2
            }).then(resp => {
                if (resp.data === 'New records created successfully') {
                    alert('Data Berhasil Di Input!');
                }
                else {
                    alert('Terjadi Kesalahan!');
                }
            })
    }

    const handleAddBerita = (event) => {
        event.preventDefault();
        const date_init = new Date();
        let timestamp = '';
        let date = '';
        date += date_init.getFullYear() + '-' + date_init.getMonth() + '-' + date_init.getDate();
        timestamp += date + ' ' + date_init.getHours() + ':' + date_init.getMinutes() + ':' + date_init.getSeconds();
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_berita/index.php',
            {
                tanggal: date, waktu: timestamp, judul: judul, isi_1: berita1, gambar_1: gambar1,
                isi_2: berita2, gambar_2: gambar2
            }).then(resp => {
                if (resp.data === 'New records created successfully') {
                    alert('Data Berhasil Di Input!');
                }
                else {
                    alert('Terjadi Kesalahan!');
                }
            })
    }

    return (
        <div className='flex ' style={{ overflowY: 'scroll', height: '100vh', width: '100%' }}>
            <div className='mx-[20%]'>
                <form onSubmit={tipe === 'Artikel' ? handleAddArtikel : handleAddBerita}>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl py-12 font-bold'>Tambah {tipe === 'Artikel' ? 'Artikel' : 'Berita'} Halaman</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 flex flex-col items-start'>
                            <label className=''>Judul </label>
                            <input onChange={e => setJudul(e.target.value)} type='text' required placeholder='Yamali TB'></input>
                        </div>
                    </div>
                    <div className='flex flex-col px-2'>
                        <label className='items-start py-2'>Deksripsi Berita 1: </label>
                        <textarea onChange={e => setBerita1(e.target.value)} pattern='\w{30, }\s' title='data tidak valid' rows="5" required style={{ "overflow": "auto", border: 'solid 2px black' }} type='text' placeholder='Deksripsi Berita 1'></textarea>
                    </div>
                    <div className='flex flex-col px-2'>
                        <label className='items-start py-2'>Deksripsi Berita 2: </label>
                        <textarea onChange={e => setBerita2(e.target.value)} pattern='\w{30, }' title='data tidak valid' rows="5" style={{ "overflow": "auto", border: 'solid 2px black' }} type='text' placeholder='Deksripsi Berita 2'></textarea>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 flex flex-col items-start'>
                            <label className='py-2'>Gambar 1: </label>
                            <input onChange={e => setGambar1(e.target.value)} title='data tidak valid' required className='w-72' type='text' placeholder='Link Gambar 1'></input>
                        </div>
                        <div className='px-4 flex flex-col items-start'>
                            <label className='py-2'>Gambar 2: </label>
                            <input onChange={e => setGambar2(e.target.value)} className='w-72' type='text' placeholder='Link Gambar 2'></input>
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