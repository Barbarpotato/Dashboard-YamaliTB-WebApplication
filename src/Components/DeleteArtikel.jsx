import React, { useState, useEffect } from 'react';
import '../Styles/table.css';
import '../Styles/content.css';
import axios from 'axios';

function DelArtikel() {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    // Artikel data that are going to showed to the client-side.
    const [artikel, setArtikel] = useState();

    // pick up the specific data to edit.
    const [selectData, setSelectData] = useState({});

    // Calling the artikel data api.
    useEffect(() => {
        // Runs on the first render
        // And any time any dependency value changes
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_artikel.php')
            .then((response) => {
                setArtikel(response.data);
                setLoading(false);
            })
            .catch((err) => {
                return err;
            });
    }, []);

    // delete some artikel data
    // ! API NEEDED.
    const handleDelete = (id) => {
        console.log(selectData);
    }

    if (isLoading) {
        return (
            <div className='text-center'>
                <h1 className='text-4xl text-center'>Memuat Data...</h1>
            </div>
        )
    }

    return (
        <div className='content'>
            <div>
                <table  >
                    <thead>
                        <tr>
                            <th className='p-2 text-xl'>Id</th>
                            <th className='p-2 text-xl'>Tanggal</th>
                            <th className='p-2 text-xl'>Waktu</th>
                            <th className='p-2 text-xl'>Judul</th>
                            <th className='p-2 text-xl'>Isi 1</th>
                            <th className='p-2 text-xl'>Gambar 1</th>
                            <th className='p-2 text-xl'>Isi 2</th>
                            <th className='p-2 text-xl'>Gambar 2</th>
                            <th className='p-2 text-xl'>Hapus Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artikel.map((item, idx) => (
                            <tr key={idx}>
                                <td className='border border-slate-700 text-xl'>{item.id}</td>
                                <td className='border border-slate-700 text-xl'>{item.tanggal}</td>
                                <td className='border border-slate-700 text-xl'>{item.waktu}</td>
                                <td className='border border-slate-700 text-xl'>{item.judul}</td>
                                <td className='border border-slate-700 text-xl'>{item.isi_1.length > 70 ? item.isi_1.substring(0, 70) + '...' : item.isi_1}</td>
                                <td className='border border-slate-700 text-xl'><a href={item.gambar_1} target='blank'>{item.gambar_1}</a></td>
                                <td className='border border-slate-700 text-xl'>{item.isi_2.length > 70 ? item.isi_2.substring(0, 70) + '...' : item.isi_2}</td>
                                <td className='border border-slate-700 text-xl'><a href={item.gambar_2} target='blank'>{item.gambar_2}</a></td>
                                <td className='border border-slate-700 text-xl'><button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        setSelectData({
                                            id: item.id
                                        });
                                        handleDelete(selectData);
                                    }
                                }}><i className="fa fa-eraser" aria-hidden="true"></i> Hapus</button></td>
                            </tr>
                        ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
};

export default DelArtikel;