import React from 'react';
import '../Styles/content.css';
import { Bar, Line, Pie } from 'react-chartjs-2';
import Chart from 'chart.js/auto';
import { CategoryScale } from "chart.js";

Chart.register(CategoryScale);

function Beranda() {

    //! Data dummy.
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

    //! Data dummy.
    const data = {
        labels: ['Bulukumba', 'Pare-Pare', 'Makassar', 'Maros'],
        datasets: [{
            label: 'Semester 1',
            data: [102, 120, 232, 115],
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
        }]
    }


    return (
        <div className='py-12 content'>
            <div className='p-4 flex flex-col text-left'>
                <h1 className='text-4xl font-semibold'>Selamat Datang</h1>
            </div>
            <div className='pt-12 flex flex-row justify-center'>
                <div className='bg-orange-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i className="fa fa-list pr-4" aria-hidden="true"></i>7</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Artikel Yamali</p>
                    </div>
                </div>

                <div className='bg-green-400 w-72 h-36 mx-4 rounded-md flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-list-alt pr-4" aria-hidden="true"></i>10</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Yang terdapat pada Berita Yamali</p>
                    </div>
                </div>

                <div className='bg-blue-400 w-72 h-36 mx-4 rounded-md  flex p-4'>
                    <div className='flex-column'>
                        <p className='text-2xl text-white font-semibold'><i class="fa fa-stethoscope pr-4" aria-hidden="true"></i>300</p>
                        <p className='p-4 text-white text-center text-xl font-light'>Kasus yang terdata pada Yamali TB</p>
                    </div>
                </div>
            </div>


            <div className='py-6' style={{ width: '700px', margin: 'auto' }}>
                <Bar data={data} options={options} />
            </div>

            <div className='py-12' style={{ width: '700px', margin: 'auto' }}>
                <Line data={data} options={options} />
            </div>

        </div >
    )
}

export default Beranda;