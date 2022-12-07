import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/content.css';
import { Bar, Pie, Doughnut, PolarArea, Radar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";
import { motion } from 'framer-motion';

Chart.register(CategoryScale);

function unique_tahun(data) {
    let tahun = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (!tahun.includes(element.tahun)) {
                tahun.push(element.tahun);
            }
        });
    }
    return tahun;
}

function label_kasus(data, tahun, semester) {
    let label = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (element.semester === semester) {
                if (element.tahun === tahun) {
                    label.push((element.kabupatenkota));
                }
            }
        });
    }
    return label;
}

function kasus_semester(data, tahun, semester) {
    let kasus = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {

        data.forEach(element => {
            if (element.semester === semester) {
                if (element.tahun === tahun) {
                    kasus.push(parseInt(element.kasusTb));
                }
            }
        });
    }
    return kasus;
}

function berhasil_semester(data, tahun, semester) {
    let berhasil = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (element.semester === semester) {
                if (element.tahun === tahun) {
                    berhasil.push(parseInt(element.berhasil));
                }
            }
        });
    }
    return berhasil;
}

function terduga_semester(data, tahun, semester) {
    let terduga = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (element.semester === semester) {
                if (element.tahun === tahun) {
                    terduga.push(parseInt(element.terdugaTb));
                }
            }
        });
    }
    return terduga;
}

function meninggal_semester(data, tahun, semester) {
    let meninggal = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (element.semester === semester) {
                if (element.tahun === tahun) {
                    meninggal.push(parseInt(element.meninggal));
                }
            }
        });
    }
    return meninggal;
}

function Beranda() {

    const [isLoading, setLoading] = useState(true);
    const [countBerita, setCountBerita] = useState();
    const [countArtikel, setCountArtikel] = useState();
    const [countKasus, setCountKasus] = useState(0);

    // data kasus.
    const [kasus, setKasus] = useState();

    // form action variables.
    const [tahun, setTahun] = useState('2021');
    const [semester, setSemester] = useState('1');
    const [jenisdata, setJenisData] = useState('TerdugaTb');

    // data chart.
    const [title, setTitle] = useState('Kosong');
    const [data, setData] = useState();

    useEffect(() => {
        const date = new Date();
        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_artikel.php')
            .then((response) => {
                setCountArtikel(() => response.data.length);
            })
            .catch((err) => {
                return err;
            });

        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_berita.php')
            .then((response) => {
                setCountBerita(response.data.length);
            })
            .catch((err) => {
                return err;
            });

        axios.get('https://yayasanmptb.or.id.yamalitb.or.id/read_kasus.php')
            .then((response) => {
                setKasus(response.data);
                response.data.forEach(element => {
                    if (element.tahun === String(date.getFullYear())) {
                        setCountKasus(prev => prev + parseInt(element.kasusTb))
                    }
                });
            })
            .catch((err) => {
                return err;
            });
        setLoading(false);
    }, []);

    const handleSubmit = (event) => {
        event.preventDefault();
        switch (jenisdata) {
            case 'KasusTb':
                setTitle('Kasus Tuberkolosis')
                return setData({
                    labels: label_kasus(kasus, tahun, semester),
                    datasets: [{
                        label: `Semester ${semester}`,
                        data: kasus_semester(kasus, tahun, semester),
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
                })
            case 'TerdugaTb':
                setTitle('Terduga Tuberkolosis')
                return setData({
                    labels: label_kasus(kasus, tahun, semester),
                    datasets: [{
                        label: `Semester ${semester}`,
                        data: terduga_semester(kasus, tahun, semester),
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
                })
            case 'Berhasil':
                setTitle('Berhasil Sembuh dari Tuberkolosis');
                return setData({
                    labels: label_kasus(kasus, tahun, semester),
                    datasets: [{
                        label: `Semester ${semester}`,
                        data: berhasil_semester(kasus, tahun, semester),
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
                })
            case 'Meninggal':
                setTitle('Meninggal dari Tuberkolosis');
                return setData({
                    labels: label_kasus(kasus, tahun, semester),
                    datasets: [{
                        label: `Semester ${semester}`,
                        data: meninggal_semester(kasus, tahun, semester),
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
                })
        }
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: title,
            },
        },
    };

    // ! required some form action to do users request.
    const init_data = {
        labels: ['Kosong'],
        datasets: [{
            label: 'Semester 1',
            data: [1],
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
        <div className='py-12 content'>
            <div className='p-4 flex flex-col text-left'>
                <h1 className='text-4xl font-semibold'>Selamat Datang</h1>
            </div>
            <div className='pt-12 flex flex-row justify-center'>
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        x: { duration: 0.1 },
                        type: 'spring'
                    }} className='bg-orange-400 w-72 h-36 mx-4 rounded-md flex p-4 shadow-2xl'>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{
                            delay: 0.2,
                            x: { duration: 1 },
                            default: { ease: "linear" }
                        }} className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i className="fa fa-list pr-4" aria-hidden="true"></i>{countArtikel}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Artikel Yamali terkini</p>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        x: { duration: 0.1 },
                        type: 'spring'
                    }}
                    className='bg-green-400 w-72 h-36 mx-4 rounded-md flex p-4 shadow-2xl'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-list-alt pr-4" aria-hidden="true"></i>{countBerita}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Berita Yamali terkini</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 1 }}
                    whileInView={{ opacity: 1 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{
                        x: { duration: 0.1 },
                        type: 'spring'
                    }}
                    className='bg-blue-400 w-72 h-36 mx-4 rounded-md flex p-4 shadow-2xl'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-stethoscope pr-4" aria-hidden="true"></i>{countKasus}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Kasus yang terdata pada Yamali TB Tahun ini:</p>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{
                    delay: 0.2,
                    x: { duration: 1 },
                    default: { ease: "linear" }
                }}
                className='py-8 my-12 rounded-2xl shadow-2xl mx-24'>
                <div className='text-center text-2xl opacity-60 font-semibold mb-2'>Pilih Kategori Data Kasus Tb Yang Ingin Dilihat:</div>
                <form className='text-center' onSubmit={handleSubmit}>
                    <div className='py-2'>
                        <label className='px-4' for="tahun">Tahun Kasus</label>
                        <select onChange={(e) => setTahun(e.target.value)} name="tahun" id="tahun">
                            {unique_tahun(kasus).map((value, idx) =>
                                <option key={idx} value={value}>{value}</option>
                            )}
                        </select>
                    </div>
                    <div className='py-2'>
                        <label className='px-4' for="semester">Semester Kasus</label>
                        <select onChange={(e) => setSemester(e.target.value)} name='semester' id='semester'>
                            <option key={1} value={'1'}>1</option>
                            <option key={2} value={'2'}>2</option>
                        </select>
                    </div>
                    <div className='py-2'>
                        <label className='px-4' for="jenisdata">Jenis Data</label>
                        <select onChange={(e) => setJenisData(e.target.value)} name='jenisdata' id='jenisdata'>
                            <option selected key={1} value={'TerdugaTb'}>Terduga TB</option>
                            <option key={2} value={'KasusTb'}>Kasus TB</option>
                            <option key={3} value={'Berhasil'}>Berhasil</option>
                            <option key={4} value={'Meninggal'}>Meninggal</option>
                        </select>
                    </div>
                    <div>
                        <button className=' rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600' type="submit">Tampilkan Data</button>
                    </div>
                </form>
            </motion.div>
            <div className='flex flex-wrap'>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }}
                    className='bg-slate-50 ' style={{ width: '550px', margin: 'auto' }}>
                    <Bar data={data == null ? init_data : data} options={options} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }} className=' bg-slate-50 ' style={{ width: '350px', margin: 'auto' }}>
                    <Pie data={data == null ? init_data : data} options={options} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }} className=' bg-slate-50  ' style={{ width: '450px', margin: 'auto' }}>
                    <PolarArea data={data == null ? init_data : data} options={options} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }} className=' bg-slate-50 ' style={{ width: '350px', margin: 'auto' }}>
                    <Doughnut data={data == null ? init_data : data} options={options} />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                        delay: 0.5,
                        x: { duration: 1 },
                        default: { ease: "linear" }
                    }} className=' bg-slate-50  ' style={{ width: '450px', margin: 'auto' }}>
                    <Radar data={data == null ? init_data : data} options={options} />
                </motion.div>
            </div>
        </div >
    )
}

export default Beranda;