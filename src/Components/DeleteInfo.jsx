import React, { useState, useEffect } from 'react';
import '../Styles/content.css';
import { motion } from "framer-motion"
import axios from 'axios';

const DeleteInfo = ({ tipe }) => {
    //? state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    //? Artikel data that are going to showed to the client-side.
    const [info, setInfo] = useState();

    const [isi_1, setIsi_1] = useState();
    const [isi_2, setIsi_2] = useState();

    //? re-rendering the page after user delete some data.
    const [refresh, setRefresh] = useState(false);

    //? Calling the artikel data api.
    useEffect(() => {
        let isi_1 = [];
        let isi_2 = [];
        //? added props dependency whenever props state changes
        //? the use effect will be running.
        switch (tipe) {
            case 'Artikel':
                axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_artikel.php')
                    .then((response) => {
                        response.data.forEach((elem) => {
                            isi_1.push(elem.isi_1.replace(/(\r\n|\r|\n)/g, '<br>'))
                            isi_2.push(elem.isi_2.replace(/(\r\n|\r|\n)/g, '<br>'))
                        })
                        setInfo(Array.from(response.data).reverse());
                        setIsi_1(Array.from(isi_1).reverse());
                        setIsi_2(Array.from(isi_2).reverse());
                        setLoading(false);
                    })
                    .catch((err) => {
                        return err;
                    });
                break;
            case 'Berita':
                axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_berita.php')
                    .then((response) => {
                        response.data.forEach((elem) => {
                            isi_1.push(elem.isi_1.replace(/(\r\n|\r|\n)/g, '<br>'))
                            isi_2.push(elem.isi_2.replace(/(\r\n|\r|\n)/g, '<br>'))
                        })
                        //? get the latest version from database
                        setInfo(Array.from(response.data).reverse());
                        setIsi_1(Array.from(isi_1).reverse());
                        setIsi_2(Array.from(isi_2).reverse());
                        setLoading(false);
                    })
                    .catch((err) => {
                        return err;
                    });
                break;
            default:
                return null
        }
    }, [tipe, refresh]);

    //? delete some artikel data.
    const handleDeleteArtikel = (id) => {
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_delete_artikel/index.php',
            { id: id })
            .then((response) => {
                alert('Data Berhasil Dihapus!');
                setRefresh(!refresh);
            })
            .catch((err) => {
                alert('Terjadi Kesalahan Menghapus Data!');
            });
    }

    //? delete some berita data
    const handleDeleteBerita = (id) => {
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_delete_berita/index.php',
            { id: id })
            .then((response) => {
                alert('Data Berhasil Dihapus!');
                setRefresh(!refresh);
            })
            .catch((err) => {
                alert('Terjadi Kesalahan Menghapus Data!');
            });
    }

    if (isLoading) {
        return (
            <div className='ml-[35%] mt-[15%]'>
                <div className="lds-roller text-center"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
                <p style={{ color: 'rgb(39, 41, 61, 1)' }} className='text-center font-bold text-black text-lg'>Memuat...</p>
            </div>
        )
    }

    return (
        <div className='content'>
            <div>
                {info.map((item, idx) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            x: { duration: 1 },
                            default: { ease: "linear" }
                        }}
                        key={item.id} className='isi bg-white mx-24 my-8 p-4'>
                        <div className='isibg-slate-50 shadow-2xl'>
                            <h1 className='text-black font-bold text-2xl p-4'>{item.judul}</h1>
                            <p className='text-left px-4 text-xl font-semibold'>Waktu Upload: {item.waktu}</p>
                            <p style={{}} className='isi text-sm text-justify px-4 py-2' dangerouslySetInnerHTML={{ __html: isi_1[idx] }}></p>
                            <p className='font-semibold text-sm text-left px-4'>Link Gambar1: <a className='underline text-blue-500' href={item.gambar_1}>{item.gambar_1}</a></p>
                            <p className='isi text-sm text-justify px-4 py-4' dangerouslySetInnerHTML={{ __html: isi_2[idx] }}></p>
                            {item.gambar_2 ? <p className='font-semibold text-sm text-left px-4'>Link Gambar2: <a className='underline text-blue-500' href={item.gambar_2}>{item.gambar_2}</a></p> : <></>}
                            <hr className='px-2 bg-blackmy-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700'></hr>
                            <button
                                className='ml-[80%] my-4 mx-4 rounded-md bg-red-500 text-white p-4 text-sm font-semibold hover:bg-red-600'
                                onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                                    if (confirm) {
                                        if (tipe === 'Artikel') {
                                            handleDeleteArtikel(item.id);
                                        } else {
                                            handleDeleteBerita(item.id);
                                        }
                                    }
                                }}>Hapus Data</button>
                        </div>
                    </motion.div>
                ))
                }
            </div>
        </div >
    )
}

export default DeleteInfo;