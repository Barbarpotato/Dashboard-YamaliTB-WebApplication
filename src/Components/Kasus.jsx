import React, { useState, useEffect } from 'react';
import '../Styles/content.css';
import '../Styles/table.css';
import axios from 'axios';

function Content() {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);

    // Decide to render edit menu or not.
    const [edit, setEdit] = useState(false);

    // pick up the specific data to edit.
    const [selectData, setSelectData] = useState({});

    // data that are going to showed to the client-side.
    const [data, setData] = useState();

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
    }, []);

    // handling edit form data
    const handleEdit = (event) => {
        const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
        if (confirm) {
            event.preventDefault();
            alert('Berhasil Memperbaharui Data!');
            console.log(event.target.elements.tahun);
            setEdit(false);
        }
        else {
            alert('Menolak Memperbaharui Data!');
            setEdit(false);
        }
        event.preventDefault();
        //! api request needed. METHOD UPDATE
        // console.log(event.target.kasus.value);
    }

    if (isLoading) {

        return <div className='text-center'>
            <h1 className='text-4xl text-center'>Memuat Data...</h1>
        </div>
    }

    return (

        // Ternary Operator. edit is true render the edit comp otherwise render the table.
        //!! edit component still a dummy
        <div div className='content' >
            {edit ? <div className='opacity-80 update mx-[25%] my-[12%] bg-slate-100 rounded-md p-4'>
                <h1 className='text-center text-xl font-semibold px-2' > Perbaharui Data Kasus</h1>
                <form onSubmit={handleEdit}>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Tahun: </label>
                            <input name='tahun' className='py-4 px-4 rounded' required pattern='20\d{2}' placeholder={selectData.tahun} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Semester: </label>
                            <input name='semester' className='py-4 px-4 rounded' required value={selectData.semester} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Kabupaten: </label>
                            <input name='kabupaten' className='py-4 px-4 rounded w-36' required value={selectData.kabupatenkota} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Jumlah Terduga: </label>
                            <input name='terduga' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' placeholder={selectData.terdugaTb} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>KasusTb: </label>
                            <input name='kasus' className='py-4 px-4 rounded w-36' required value={selectData.kasusTb} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Berhasil: </label>
                            <input name='berhasil' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' placeholder={selectData.berhasil} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Meninggal: </label>
                            <input name='meninggal' className='py-4 px-4 rounded w-36' required value={selectData.meninggal} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Defaul: </label>
                            <input name='defaul' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' placeholder={selectData.defaul} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Gagal: </label>
                            <input name='gagal' className='py-4 px-4 rounded w-36' required value={selectData.gagal} />
                        </div>

                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4 px-2'>
                            <button className='rounded w-56 bg-red-500 text-white py-4 px-4 text-lg'
                                onClick={() => {
                                    // back to the table component after user reject update data
                                    alert('Menolak Memperbaharui Data!');
                                    setEdit(false);
                                }}>
                                Batal Perbaharui Data</button>
                        </div>
                        <div className='py-4 px-2'>
                            <button className='rounded w-56 bg-green-500 text-white py-4 px-4 text-lg' type='submit'>
                                Perbaharui Data</button>
                        </div>
                    </div>
                </form>
            </div >

                :
                <table  >
                    <thead>
                        <tr>
                            <th className='p-2 text-xl'>Id</th>
                            <th className='border border-slate-600 p-2 text-xl'>Tahun</th>
                            <th className='border border-slate-600 p-2 text-xl'>Semester</th>
                            <th className='border border-slate-600 p-2 text-xl'>Kabupaten/kota</th>
                            <th className='border border-slate-600 p-2 text-xl'>TerdugaTb</th>
                            <th className='border border-slate-600 p-2 text-xl'>KasusTb</th>
                            <th className='border border-slate-600 p-2 text-xl'>Berhasil</th>
                            <th className='border border-slate-600 p-2 text-xl'>Meninggal</th>
                            <th className='border border-slate-600 p-2 text-xl'>Defaul</th>
                            <th className='border border-slate-600 p-2 text-xl'>Gagal</th>
                            <th className='border border-slate-600 p-2 text-xl'>Ubah Data</th>
                            <th className='p-2 text-xl'>Hapus Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, idx) => (
                            <tr key={idx}>
                                <td className='border border-slate-700 text-xl'>{item.id}</td>
                                <td className='border border-slate-700 text-xl'>{item.tahun}</td>
                                <td className='border border-slate-700 text-xl'>{item.semester}</td>
                                <td className='border border-slate-700 text-xl'>{item.kabupatenkota}</td>
                                <td className='border border-slate-700 text-xl'>{item.terdugaTb}</td>
                                <td className='border border-slate-700 text-xl'>{item.kasusTb}</td>
                                <td className='border border-slate-700 text-xl'>{item.berhasil}</td>
                                <td className='border border-slate-700 text-xl'>{item.meninggal}</td>
                                <td className='border border-slate-700 text-xl'>{item.defaul}</td>
                                <td className='border border-slate-700 text-xl'>{item.gagal}</td>
                                <td className='border border-slate-700 text-xl'><button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        setSelectData({
                                            id: item.id, tahun: item.tahun, semester: item.semester,
                                            kabupatenkota: item.kabupatenkota, terdugaTb: item.terdugaTb,
                                            kasusTb: item.kasusTb, berhasil: item.berhasil, meninggal: item.meninggal,
                                            defaul: item.defaul, gagal: item.gagal
                                        });
                                        setEdit(true);
                                    }
                                }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Ubah</button></td>
                                <td className='border border-slate-700 text-xl'><button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        setSelectData({
                                            id: item.id
                                        });
                                        setEdit(true);
                                    }
                                }}><i className="fa fa-eraser" aria-hidden="true"></i> Hapus</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Content;