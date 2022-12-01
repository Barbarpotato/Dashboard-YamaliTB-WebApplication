import axios from "axios";
import { useState } from "react";
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
        <div className='opacity-80 update mx-[25%] my-7 bg-slate-100 rounded-md p-4'>
            <h1 className='text-center text-xl font-semibold px-2'>Tambah Data Kasus</h1>
            <form onSubmit={handleAddKasus}>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Tahun: </label>
                        <input onChange={e => setTahun(e.target.value)} name='tahun' className='py-4 px-4 rounded' required pattern='20\d{2}' />
                    </div>
                    <div className='py-4 px-4'>
                        <label className='px-4' for="semester">Semester:</label>
                        <select onChange={(e) => setSemester(e.target.value)} name='semester' id='semester'>
                            <option key={1} value={'1'}>1</option>
                            <option key={2} value={'2'}>2</option>
                        </select>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label className='px-4' for="semester">Kabupaten:</label>
                        <select onChange={(e) => setKabupaten(e.target.value)} name='kabupaten' id='kabupaten'>
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
                        <input onChange={e => setTerduga(e.target.value)} name='terduga' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>KasusTb: </label>
                        <input onChange={e => setKasus(e.target.value)} name='kasus' className='py-4 px-4 rounded w-36' required />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Berhasil: </label>
                        <input onChange={e => setBerhasil(e.target.value)} name='berhasil' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Meninggal: </label>
                        <input onChange={e => setMeninggal(e.target.value)} name='meninggal' className='py-4 px-4 rounded w-36' required />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Defaul: </label>
                        <input onChange={e => setDefaul(e.target.value)} name='defaul' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Gagal: </label>
                        <input onChange={e => setGagal(e.target.value)} name='gagal' className='py-4 px-4 rounded w-36' required />
                    </div>

                </div>
                <div className='flex flex-row'>

                    {!submit ? <div className='py-4 px-2'>
                        <button className='rounded w-56 bg-green-500 text-white py-4 px-4 text-lg' type='submit'>
                            Tambah Data</button>
                    </div>
                        : <></>}
                </div>
            </form>
        </div >
    )
}

export default AddKasus;