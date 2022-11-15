import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Styles/content.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function label_kasus(data) {
    let label = [];
    if (data === undefined) {
        console.log('wait');
    }
    else {
        data.forEach(element => {
            if (!label.includes(element.kabupatenkota)) {
                label.push(element.kabupatenkota);
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

function Beranda() {

    const [isLoading, setLoading] = useState(true);
    const [countBerita, setCountBerita] = useState();
    const [countArtikel, setCountArtikel] = useState();
    const [countKasus, setCountKasus] = useState(0);

    const [kasus, setKasus] = useState();

    useEffect(() => {
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
                response.data.forEach(element => setCountKasus(prev => prev + parseInt(element.kasusTb)));
            })
            .catch((err) => {
                return err;
            });

        setLoading(false);
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Data Kasus TB',
            },
        },
    };

    // ! required some form action to do users request.
    const data = {
        labels: label_kasus(kasus),
        datasets: [{
            label: 'Semester 1',
            data: kasus_semester(kasus, '2021', '1'),
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
            <div className='text-center'>
                <h1 className='text-4xl text-center'>Memuat Data...</h1>
            </div>
        )
    }

    return (
        <div className='py-12 content'>
            <div className='p-4 flex flex-col text-left'>
                <h1 className='text-4xl font-semibold'>Selamat Datang</h1>
            </div>
            <div className='pt-12 flex flex-row justify-center'>
                <div className='bg-orange-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i className="fa fa-list pr-4" aria-hidden="true"></i>{countArtikel}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Artikel Yamali terkini</p>
                    </div>
                </div>

                <div className='bg-green-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-list-alt pr-4" aria-hidden="true"></i>{countBerita}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Berita Yamali terkini</p>
                    </div>
                </div>

                <div className='bg-blue-400 w-72 h-36 mx-4 rounded-md  flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-stethoscope pr-4" aria-hidden="true"></i>{countKasus}</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Kasus yang terdata pada Yamali TB terkni</p>
                    </div>
                </div>
            </div>


            <div className='py-6' style={{ width: '700px', margin: 'auto' }}>
                <Bar data={data} options={options} />
            </div>

            <div className='py-12' style={{ width: '550px', margin: 'auto' }}>
                <Pie data={data} options={options} />
            </div>

        </div >
    )
}

export default Beranda;