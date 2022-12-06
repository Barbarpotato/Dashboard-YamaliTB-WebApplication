import React, { useState, useEffect } from 'react';
import '../Styles/table.css';
import '../Styles/content.css';
import axios from 'axios';
import { motion } from 'framer-motion';

function DelBerita() {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    // Artikel data that are going to showed to the client-side.
    const [berita, setBerita] = useState();

    // Calling the artikel data api.
    useEffect(() => {
        // Runs on the first render
        // And any time any dependency value changes
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_berita.php')
            .then((response) => {
                //? get the latest version from database
                setBerita(Array.from(response.data).reverse());
                setLoading(false);
            })
            .catch((err) => {
                return err;
            });

    }, []);

    //? delete some artikel data
    const handleDelete = (id) => {
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_delete_berita/index.php',
            { id: id })
            .then((response) => {
                alert('Data Berhasil Dihapus!');
                //? redirect user to the login
                window.location.reload(false);
            })
            .catch((err) => {
                alert('Terjadi Kesalahan Menghapus Data!');
                //? redirect user to the login
                window.location.reload(false);
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
                {berita.map((item, idx) => (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            delay: 0.5,
                            x: { duration: 1 },
                            default: { ease: "linear" }
                        }}
                        key={item.id} className='bg-white mx-24 my-8 p-4'>
                        <div className='bg-slate-50 shadow-2xl'>
                            <h1 className='text-black font-bold text-2xl p-4'>{item.judul}</h1>
                            <p className='text-left px-4 text-xl font-semibold'>Waktu Upload: {item.waktu}</p>
                            <p className='text-sm text-justify px-4 py-2'>{item.isi_1}</p>
                            <p className='font-semibold text-sm text-left px-4'>Link Gambar1: <a className='underline text-blue-500' href={item.gambar_1}>{item.gambar_1}</a></p>
                            <p className='text-sm text-justify px-4 py-4'>{item.isi_2}</p>
                            {item.gambar_2 ? <p className='font-semibold text-sm text-left px-4'>Link Gambar2: {item.gambar_2}</p> : <></>}
                            <hr className='px-2 bg-blackmy-4 mx-auto w-48 h-1 bg-gray-100 rounded border-0 md:my-10 dark:bg-gray-700'></hr>
                            <button className='ml-[80%] my-4 text-lg mx-4 rounded-md text-white bg-red-500 p-2 text-right' onClick={() => {
                                const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                                if (confirm) {
                                    handleDelete(item.id);
                                }
                            }}>{" "}Hapus Data{" "}</button>
                        </div>
                    </motion.div>
                ))
                }
            </div>
        </div>
    )
};

export default DelBerita;