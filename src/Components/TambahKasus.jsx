import axios from "axios";
import { useState } from "react";
import { motion } from 'framer-motion';
import '../Styles/content.css';

function AddKasus() {

    const [tahun, setTahun] = useState();
    const [semester, setSemester] = useState("1");
    const [kabupaten, setKabupaten] = useState('Kab. Bulukumba');
    const [terduga, setTerduga] = useState();
    const [kasus, setKasus] = useState();
    const [berhasil, setBerhasil] = useState();
    const [meninggal, setMeninggal] = useState();
    const [defaul, setDefaul] = useState();
    const [gagal, setGagal] = useState();

    const [submit, setSubmit] = useState(false);

    //! POST METHOD REQUIERD.
    const handleAddKasus = (event) => {
        //? prevent user spamming the button.
        setSubmit(true);
        event.preventDefault();

        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin_post_kasus/index.php',
            {
                tahun: tahun, semester: semester, kabupaten: kabupaten, terduga_tb: terduga, kasus_tb: kasus,
                berhasil: berhasil, meninggal: meninggal, defaul: defaul, gagal: gagal
            }).then(resp => {
                if (resp.data === 'New records created successfully') {
                    alert('Data Berhasil Di Input!');
                }
                else {
                    alert("Terjadi Kesalahan!")
                }
            })
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
            <h1 className='text-3xl font-semibold px-2'>*Tambah Data Kasus</h1>
            <form onSubmit={handleAddKasus}>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Tahun: </label>
                    <input
                        pattern='20\d{2}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '530px' }}
                        onChange={e => setTahun(e.target.value)} name='tahun' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2
                    ' for="semester">Semester:</label>
                    <select
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={(e) => setSemester(e.target.value)} name='semester' id='semester'>
                        <option key={1} value={'1'}>1</option>
                        <option key={2} value={'2'}>2</option>
                    </select>
                </div>
                <div className="py-4">
                    <label className='text-base font-semibold px-2' for="semester">Kabupaten:</label>
                    <select
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '490px' }}
                        onChange={(e) => setKabupaten(e.target.value)} name='kabupaten' id='kabupaten'>
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
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Jumlah Terduga: </label>
                    <input
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '450px' }}
                        onChange={e => setTerduga(e.target.value)} name='terduga' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>KasusTb: </label>
                    <input
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={e => setKasus(e.target.value)} name='kasus' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'> Berhasil: </label>
                    <input
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={e => setBerhasil(e.target.value)} name='berhasil' title='Data Harus Berbentuk Angka' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Meninggal: </label>
                    <input
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={e => setMeninggal(e.target.value)} name='meninggal' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Defaul: </label>
                    <input
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={e => setDefaul(e.target.value)} name='defaul' pattern='\d{1,}' title='Data Harus Berbentuk Angka' required />
                </div>
                <div className='py-4'>
                    <label className='text-base font-semibold px-2'>Gagal: </label>
                    <input
                        title='Data Harus Berbentuk Angka'
                        pattern='\d{1,}'
                        className="p-4 focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                        invalid:border-pink-500 invalid:text-pink-600
                        focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                        style={{ width: '500px' }}
                        onChange={e => setGagal(e.target.value)} name='gagal' required />
                </div>
                {!submit ? <div className='py-4 px-2'>
                    <button className='rounded-md bg-green-500 text-white p-4 text-sm font-semibold hover:bg-green-600' type='submit'>
                        Tambah Data Kasus Tb</button>
                </div>
                    :
                    <></>}
            </form>
        </motion.div >
    )
}

export default AddKasus;