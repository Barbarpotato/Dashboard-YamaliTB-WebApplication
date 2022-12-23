import { useState, useEffect } from "react";
import { Pie } from 'react-chartjs-2';
import axios from 'axios';
import { motion } from 'framer-motion';
import { Refresh } from "@mui/icons-material";
import '../Styles/content.css';

const KasusTotal = () => {

    // state for controlling the ui showed in the client-side.
    const [isLoading, setLoading] = useState(true);
    const [refresh, setRefresh] = useState(false);
    const [data, setData] = useState();
    const [edit, setEdit] = useState(false);
    const [selectData, setSelectData] = useState({});

    useEffect(() => {
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_sulsel.php')
            .then((response) => {
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                return err;
            })
    }, [refresh])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: "Data",
            },
        },
    };

    const handleEdit = (event) => {
        const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
        if (confirm) {
            event.preventDefault();
            //TODO: fixing the REST RESOURCE.
            axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_update_sulsel/index.php', {
                id: selectData.id,
                tahun: parseInt(event.target.tahun.value),
                terdugaTb: parseInt(event.target.terduga.value),
                kasusTb: parseInt(event.target.kasus.value),
                sukses: parseInt(event.target.sukses.value),
                meninggal: parseInt(event.target.meninggal.value),
                defaul: parseInt(event.target.defaul.value),
                gagal: parseInt(event.target.gagal.value)
            })
                .then((resp) => {
                    console.log(resp);
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
        //TODO: fixing the REST RESOURCE.
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_delete_sulsel/index.php',
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
        <div className="content">{
            edit ?
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0, 0.71, 0.2, 1.01]
                    }}
                    className='rounded-2xl  update bg-slate-50 shadow-2xl flex flex-col items-center ml-[330px]'>
                    <h1 className='text-left text-3xl font-semibold px-2 py-4' >*Perbaharui Data Total Kasus</h1>
                    <form onSubmit={handleEdit}>
                        <label className='px-2'>Tahun: </label>
                        <input name='tahun'
                            className='py-4 px-4 rounded h-12 w-64'
                            required
                            pattern='20\d{2}'
                            placeholder={selectData.tahun} />
                        <div className='py-4 px-2'>
                            <label>TerdugaTb: </label>
                            <input name='terduga'
                                pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-56 h-12' placeholder={selectData.terdugaTb} />
                        </div>
                        <div className='py-4 px-2'>
                            <label>KasusTb: </label>
                            <input name='kasus' className='py-4 px-2 rounded w-64 h-12' required placeholder={selectData.kasusTb} />
                        </div>
                        <div className='py-4 px-2'>
                            <label>Sukses: </label>
                            <input
                                name='sukses' pattern='\d{1,}' title='data input tidak valid' required
                                className='py-4 px-4 rounded w-64 h-12' placeholder={selectData.sukses} />
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
                <div className="flex flex-wrap justify-center">
                    {data.map((item, idx) => (
                        <div key={item.id} className="m-8 rounded-2xl shadow-2xl px-4 py-4 w-[300px] h-[400px]">
                            <div className="rounded-2xl bg-blue-300 w-[75px]">
                                <h1 className="px-2 text-lg font-bold">*{item.tahun}</h1>
                            </div>
                            <Pie data={{
                                labels: ["terdugaTb", "kasusTb", "sukses", "meninggal", "defaul", "gagal"],
                                datasets: [{
                                    label: `Total Keseluruhan Sulsel ${item.tahun} `,
                                    data: [item.terdugaTb, item.kasusTb, item.sukses, item.meninggal, item.defaul, item.gagal],
                                    backgroundColor: ['rgba(255, 99, 132, 0.5)',
                                        'rgba(54, 162, 235, 0.5)',
                                        'rgba(255, 206, 86, 0.5)',
                                        'rgba(75, 192, 192, 0.5)',
                                        'rgba(153, 102, 255, 0.5)',
                                        'rgba(200, 159, 64, 0.8)',
                                        'rgba(154, 162, 235, 1)',
                                        'rgba(0, 0, 128, 1)',
                                        'rgba(128, 0, 0, 1)']
                                }]
                            }} options={options} />
                            <div className="flex flex-row pt-4 justify-center">
                                <button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        setSelectData({ id: item.id });
                                        setEdit(true);
                                    }
                                }} className="p-[8px] bg-green-300 rounded-lg">Ubah Data</button>
                                <button onClick={() => {
                                    const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                                    if (confirm) {
                                        handleDelete(item.id);
                                    }
                                }} className="p-[8px] ml-4 bg-red-300 rounded-lg">Hapus Data</button>
                            </div>
                        </div>
                    ))
                    }
                </div >
        }
        </div >
    )
}

export default KasusTotal;