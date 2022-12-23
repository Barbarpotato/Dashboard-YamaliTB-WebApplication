import axios from "axios";
import { useState, useRef, useEffect } from "react";
import { motion } from 'framer-motion';
import '../Styles/content.css';

function AddKasus({ tipe }) {

    const inputRef1 = useRef(null);
    const inputRef2 = useRef(null);
    const inputRef3 = useRef(null);
    const inputRef4 = useRef(null);
    const inputRef5 = useRef(null);
    const inputRef6 = useRef(null);
    const inputRef7 = useRef(null);

    useEffect(() => {
        inputRef1.current.value = '';
        inputRef2.current.value = '';
        inputRef3.current.value = '';
        inputRef4.current.value = '';
        inputRef5.current.value = '';
        inputRef6.current.value = '';
        inputRef7.current.value = '';
    }, [tipe]);

    //! POST METHOD REQUIERD.
    const handleAddKasus = (event) => {
        //? prevent user spamming the button.
        event.preventDefault();
        const tahun = event.target.tahun.value;
        const terduga = event.target.terduga.value;
        const kasus = event.target.kasus.value;
        const meninggal = event.target.meninggal.value;
        const defaul = event.target.defaul.value;
        const gagal = event.target.gagal.value;


        switch (tipe) {

            case "normal":
                const berhasil = event.target.berhasil.value;
                const semester = event.target.semester.value;
                const kabupaten = event.target.kabupaten.value;
                axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_kasus/index.php',
                    {
                        tahun: tahun, semester: semester, kabupaten: kabupaten, terduga_tb: terduga, kasus_tb: kasus,
                        berhasil: berhasil, meninggal: meninggal, defaul: defaul, gagal: gagal
                    }).then(resp => {
                        if (resp.data === 'New records created successfully') {
                            alert('Data Berhasil Di Input!');
                        }
                        else {
                            alert("Terjadi Kesalahan!");
                        }
                    }).catch((err) => {
                        alert(err);
                    })
                break;
            case "total":
                const sukses = event.target.sukses.value
                axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_sulsel/index.php',
                    {
                        tahun: tahun, terdugaTb: terduga, kasusTb: kasus,
                        sukses: sukses, meninggal: meninggal, defaul: defaul, gagal: gagal
                    }).then(resp => {
                        if (resp.data === 'New records created successfully') {
                            alert('Data Berhasil Di Input!');
                        }
                        else {
                            console.log(resp)
                            alert("Terjadi Kesalahan!")
                        }
                    }).catch((err) => {
                        alert(err);
                    });
            default:
                break;
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='content opacity-80 bg-slate-50  rounded-2xl pl-44 py-4 shadow-2xl'>
            <h1 className='text-3xl font-semibold px-2'>{tipe === 'normal' ? '* Tambah Data Kasus' : '* Tambah Data Kasus Total'}</h1>
            <form onSubmit={handleAddKasus}>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Tahun: </label>
                    <input
                        name="tahun"
                        ref={inputRef1}
                        pattern='20\d{2}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '530px' }} />
                </div>
                {tipe === 'normal' ? <div className='py-4'>
                    <label className='text-base font-semibold px-2'
                    >Semester:</label>
                    <select

                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                    invalid:border-pink-500 invalid:text-pink-600
                    focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name='semester' id='semester'>
                        <option key={1} value={'1'}>1</option>
                        <option key={2} value={'2'}>2</option>
                    </select>
                </div> : <></>}
                {tipe === 'normal' ?
                    <div className="py-4">
                        <label className='text-base font-semibold px-2'>Kabupaten:</label>
                        <select

                            className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                            style={{ width: '490px' }}
                            name='kabupaten' id='kabupaten'>
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
                    </div> :
                    <></>}
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Jumlah Terduga: </label>
                    <input
                        ref={inputRef2}
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '450px' }}
                        name='terduga' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>KasusTb: </label>
                    <input
                        ref={inputRef3}
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name='kasus' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'> {tipe === 'normal' ? 'Berhasil' : 'Sukses:'} </label>
                    <input
                        ref={inputRef4}
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name={tipe === 'normal' ? 'berhasil' : 'sukses'} title='Data Harus Berbentuk Angka' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Meninggal: </label>
                    <input
                        ref={inputRef5}
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name='meninggal' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Defaul: </label>
                    <input
                        ref={inputRef6}
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name='defaul' pattern='\d{1,}' title='Data Harus Berbentuk Angka' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Gagal: </label>
                    <input
                        ref={inputRef7}
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        name='gagal' required />
                </div>
                <div className='py-4 px-2'>
                    <button className='rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600' type='submit'>
                        Tambah Data Kasus Tb</button>
                </div>
            </form>
        </motion.div >
    )
}

export default AddKasus;