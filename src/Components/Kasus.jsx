import React, { useState, useEffect } from 'react';
import '../Styles/content.css';
import '../Styles/table.css';
import axios from 'axios';
import { motion } from 'framer-motion';

function Content() {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    // Decide to render edit menu or not.
    const [edit, setEdit] = useState(false);

    // pick up the specific data to edit.
    const [selectData, setSelectData] = useState({});

    // data that are going to showed to the client-side.
    const [data, setData] = useState();

    const [refresh, setRefresh] = useState(false);

    // Calling the api.
    useEffect(() => {
        // Runs on the first render
        // And any time any dependency value changes
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_kasus.php')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                return err;
            });
    }, [refresh]);

    //TODO: handling edit form data
    const handleEdit = (event) => {
        const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
        if (confirm) {
            event.preventDefault();
            axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_update_kasus/index.php', {
                id: selectData.id,
                tahun: parseInt(event.target.tahun.value),
                semester: parseInt(event.target.semester.value),
                kabupaten: String(event.target.kabupaten.value),
                terduga_tb: parseInt(event.target.terduga.value),
                kasus_tb: parseInt(event.target.kasus.value),
                berhasil: parseInt(event.target.berhasil.value),
                meninggal: parseInt(event.target.meninggal.value),
                defaul: parseInt(event.target.defaul.value),
                gagal: parseInt(event.target.gagal.value)
            })
                .then((resp) => {
                    alert('Berhasil Memperbaharui Data!');
                    setRefresh(!refresh)
                    setEdit(false);
                })
                .catch((err) => {
                    alert('Gagal Memperbaharui Data!');
                    setEdit(false);
                });
        }
        else {
            alert('Menolak Memperbaharui Data!');
            setEdit(false);
        }
        event.preventDefault();
    }

    const handleDelete = (id) => {
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_delete_kasus/index.php',
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
        // Ternary Operator. edit is true render the edit comp otherwise render the table.
        //!! edit component still a dummy
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='content' >
            {edit ? <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
                className='rounded-2xl  update mx-[25%] bg-slate-50 shadow-2xl p-4'>
                <h1 className='text-left text-3xl font-semibold px-2 py-4' >*Perbaharui Data Kasus</h1>
                <form onSubmit={handleEdit}>
                    <label className='px-2'>Tahun: </label>
                    <input name='tahun'
                        className='py-4 px-4 rounded h-12 w-64'
                        required
                        pattern='20\d{2}'
                        placeholder={selectData.tahun} />
                    <div className='py-4 px-2'>
                        <label>Semester: </label>
                        <select
                            className='w-64 h-12'
                            name='semester' id='semester'>
                            <option key={1} value={'1'}>1</option>
                            <option key={2} value={'2'}>2</option>
                        </select>
                    </div>
                    <div className='py-4'>
                        <label className='px-2' for="semester">Kabupaten:</label>
                        <select name='kabupaten' id='kabupaten' className='h-12 w-56'>
                            <option key={1} value={'Kab. Bulukumba'}>Kab. Bulukumba</option>
                            <option key={2} value={'Kab. Jeneponto'}>Kab. Jeneponto</option>
                            <option key={3} value={'Kab. Gowa'}>Kab. Gowa</option>
                            <option key={4} value={'Kab. Maros'}>Kab. Maros</option>
                            <option key={5} value={'Kab. Bone'}>Kab. Bone</option>
                            <option key={6} value={'Kab. Wajo'}>Kab. Wajo</option>
                            <option key={7} value={'Kab. Sidenrang Rappang'}>Kab. Sidenrang Rappang</option>
                            <option key={8} value={'Kab. Pinrang'}>Kab. Pinrang</option>
                            <option key={9} value={'Kota Makassar'}>Kota Makassar</option>
                        </select>
                    </div>
                    <div className='py-4 px-2'>
                        <label>Jumlah Terduga: </label>
                        <input name='terduga'
                            pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-56 h-12' placeholder={selectData.terdugaTb} />
                    </div>
                    <div className='py-4 px-2'>
                        <label>KasusTb: </label>
                        <input name='kasus' className='py-4 px-2 rounded w-64 h-12' required placeholder={selectData.kasusTb} />
                    </div>
                    <div className='py-4 px-2'>
                        <label>Berhasil: </label>
                        <input
                            name='berhasil' pattern='\d{1,}' title='data input tidak valid' required
                            className='py-4 px-4 rounded w-64 h-12' placeholder={selectData.berhasil} />
                    </div>
                    <div className='py-4 px-2'>
                        <label>Meninggal: </label>
                        <input name='meninggal'
                            className='py-4 px-4 rounded w-64 h-12' required placeholder={selectData.meninggal} />
                    </div>
                    <div className='py-4 px-2'>
                        <label>Defaul: </label>
                        <input name='defaul' pattern='\d{1,}' title='data input tidak valid' required
                            className='py-4 px-4 rounded w-64 h-12' placeholder={selectData.defaul} />
                    </div>
                    <div className='py-4 px-2'>
                        <label>Gagal: </label>
                        <input name='gagal' className='py-4 px-4 rounded w-64 h-12' required placeholder={selectData.gagal} />
                    </div>

                    <div className='flex flex-row'>
                        <div className='py-4 px-2'>
                            <button className='rounded-md bg-red-500 text-white p-4 text-sm font-semibold hover:bg-red-600'
                                onClick={() => {
                                    // back to the table component after user reject update data
                                    alert('Menolak Memperbaharui Data!');
                                    setEdit(false);
                                }}>
                                Batal Perbaharui Data</button>
                        </div>
                        <div className='py-4 px-2'>
                            <button className='rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600'
                                type='submit'>
                                Perbaharui Data</button>
                        </div>
                    </div>
                </form>
            </motion.div >
                :
                <table  >
                    <thead>
                        <tr>
                            <th className='border-slate-600 p-2 text-lg'>Tahun</th>
                            <th className='border border-slate-600 p-2text-lg'>Semester</th>
                            <th className='border border-slate-600 p-2 text-lg'>Kabupaten/kota</th>
                            <th className='border border-slate-600 p-2 text-lg'>TerdugaTb</th>
                            <th className='border border-slate-600 p-2 text-lg'>KasusTb</th>
                            <th className='border border-slate-600 p-2 text-lg'>Berhasil</th>
                            <th className='border border-slate-600 p-2 text-lg'>Meninggal</th>
                            <th className='border border-slate-600 p-2 text-lg'>Defaul</th>
                            <th className='border border-slate-600 p-2 text-lg'>Gagal</th>
                            <th className='border border-slate-600 p-2 text-lg'>Ubah Data</th>
                            <th className='p-2 text-xl'>Hapus Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx}>
                                <td className='p-2  text-xl'>{item.tahun}</td>
                                <td className='p-2  text-xl'>{item.semester}</td>
                                <td className='p-2  text-xl'>{item.kabupatenkota}</td>
                                <td className='p-2  text-xl'>{item.terdugaTb}</td>
                                <td className='p-2  text-xl'>{item.kasusTb}</td>
                                <td className='p-2  text-xl'>{item.berhasil}</td>
                                <td className='p-2  text-xl'>{item.meninggal}</td>
                                <td className='p-2  text-xl'>{item.defaul}</td>
                                <td className='p-2  text-xl'>{item.gagal}</td>
                                <td className='p-2  text-xl'><button className=' rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600' onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        setSelectData(item);
                                        setEdit(true);
                                    }
                                }}>Ubah Data</button></td>
                                <td className='  text-xl'><button className=' rounded-md bg-red-500 text-white p-4 text-sm font-semibold hover:bg-red-600' onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                                    if (confirm) {
                                        handleDelete(item.id);
                                    }
                                }}> Hapus Data</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </motion.div>
    )
}

export default Content;