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

    //TODO: handling edit form data
    const handleEdit = (event) => {
        const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
        if (confirm) {
            event.preventDefault();
            axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_update_kasus/index.php', {
                id: selectData,
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
                    window.location.reload(false);

                })
                .catch((err) => {
                    alert('Gagal Memperbaharui Data!');
                    window.location.reload(false);
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
                            <select name='semester' id='semester'>
                                <option key={1} value={'1'}>1</option>
                                <option key={2} value={'2'}>2</option>
                            </select>
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label className='px-4' for="semester">Kabupaten:</label>
                            <select name='kabupaten' id='kabupaten'>
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
                                        setSelectData(item.id);
                                        setEdit(true);
                                    }
                                }}><i className="fa fa-pencil-square-o" aria-hidden="true"></i> Ubah</button></td>
                                <td className='border border-slate-700 text-xl'><button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                                    if (confirm) {
                                        handleDelete(item.id);
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