import React, { useState } from 'react';
import '../Styles/content.css';
import axios from 'axios';
import { motion } from 'framer-motion';

function AddBerita({ tipe }) {

    const [judul, setJudul] = useState();
    const [berita1, setBerita1] = useState();
    const [gambar1, setGambar1] = useState();
    const [berita2, setBerita2] = useState(' ');
    const [gambar2, setGambar2] = useState(' ');

    const [submit, setsubmit] = useState(false);

    const handleAddArtikel = (event) => {
        //? prevent user spamming the button.
        setsubmit(true);
        event.preventDefault();
        console.log('testing')
        const date_init = new Date();
        let timestamp = '';
        let date = '';
        date += date_init.getFullYear() + '-' + (date_init.getMonth() + 1) + '-' + date_init.getDate();
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
        //? prevent user spamming the button.
        setsubmit(true);
        event.preventDefault();

        const date_init = new Date();
        let timestamp = '';
        let date = '';
        date += date_init.getFullYear() + '-' + (date_init.getMonth() + 1) + '-' + date_init.getDate();
        timestamp += date + ' ' + date_init.getHours() + ':' + date_init.getMinutes() + ':' + date_init.getSeconds();
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_berita/index.php',
            {
                tanggal: date, waktu: timestamp, judul: judul, isi_1: berita1, gambar_1: gambar1,
                isi_2: berita2, gambar_2: gambar2
            }).then(resp => {
                if (resp.data === 'New records created successfully') {
                    alert('Data Berhasil Di Input!');
                    setsubmit(true);
                }
                else {
                    alert('Terjadi Kesalahan!');
                }
            })
    }

    return (
        <div className='flex' style={{ overflowY: 'scroll', height: '100vh', width: '100%' }}>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='mx-[20%]'>
                <form onSubmit={tipe === 'Artikel' ? handleAddArtikel : handleAddBerita
                }>
                    <div className='flex flex-col'>
                        <h1 className='text-3xl py-12 font-bold p-4'>*Tambah {tipe === 'Artikel' ? 'Artikel' : 'Berita'} Halaman</h1>
                    </div>
                    <div className='flex flex-row'>
                        <div className='px-2 flex flex-row items-center'>
                            <label className='mr-4'>Judul: </label>
                            <input className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-b-pink-500 invalid:text-pink-600
                            focus:invalid:border-b-pink-500 focus:invalid:ring-pink-500'
                                style={{ width: '550px', borderColor: 'white' }} onChange={e => setJudul(e.target.value)} title='Sertakan Judul DSengan Baik Dan Jelas' type='text' required placeholder='Yamali TB'></input>
                        </div>
                    </div>
                    <div className='flex flex-row px-2'>
                        <label className='mr-4 items-start py-2'>Deksripsi Berita 1: </label>
                        <textarea className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500' onChange={e => setBerita1(e.target.value)} placeholder='Deksripsi Berita1' pattern='\w{30, }\s'
                            title='Dekripsi Berita Bisa Digeser Memanjang Kebawah' rows="5" required
                            style={{ "overflow": "auto", borderColor: 'white', width: '470px' }} type='text'></textarea>
                    </div>
                    <div className='flex flex-row px-2'>
                        <label className='mr-4 items-start py-2'>Deksripsi Berita 2: </label>
                        <textarea
                            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-b-pink-500 invalid:text-pink-600
                            focus:invalid:border-b-pink-500 focus:invalid:ring-pink-500'
                            title='Untuk Inputan Deksripsi 2 Opsional'
                            onChange={e => setBerita2(e.target.value)} pattern='\w{30, }' rows="5"
                            style={{ "overflow": "auto", borderColor: 'white', width: '470px' }} type='text' placeholder='Deksripsi Berita 2'></textarea>
                    </div>
                    <div className='px-2 flex flex-col items-start'>
                        <label className='mr-4 items-start py-2'>Gambar 1: </label>
                        <input
                            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                            onChange={e => setGambar1(e.target.value)} title='Perhatikan URL LINK Yang Dimasukkan Ke Input' required
                            style={{ "overflow": "auto", borderColor: 'white', width: '550px' }}
                            type='text' placeholder='Link Gambar 1'></input>
                        <p class=" text-pink-600 text-sm">
                            *Mohon Perhatikan Format Link Google Drive saat melakukan input!<br></br>
                            *Link Google Drive Wajib Bersifat Publik.
                        </p>
                    </div>
                    <div className='px-2 flex flex-col items-start'>
                        <label className='mr-4 items-start py-2'>Gambar 2: </label>
                        <input
                            className='mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                            focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                            disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                            invalid:border-pink-500 invalid:text-pink-600
                            focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
                            onChange={e => setGambar2(e.target.value)}
                            title='Untuk Inputan Gambar 2 Opsional'
                            style={{ "overflow": "auto", borderColor: 'white', width: '550px' }}
                            type='text' placeholder='Link Gambar 2'></input>
                        <p class="text-pink-600 text-sm">
                            *Mohon Perhatikan Format Link Google Drive saat melakukan input!<br></br>
                            *Link Google Drive Wajib Bersifat Publik.
                        </p>
                    </div>
                    {
                        !submit ?
                            <div className='py-8'>
                                <button style={{ width: '150px' }}
                                    className='rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600' type='submit'>
                                    Publikasikan {tipe === 'Artikel' ? 'Artikel' : 'Berita'}</button>
                            </div> :
                            <></>
                    }
                </form>
            </motion.div >
        </div >
    )
}

export default AddBerita;