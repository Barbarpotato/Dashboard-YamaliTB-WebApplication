import axios from "axios";
import '../Styles/content.css';

function AddKasus() {

    //! POST METHOD REQUIERD.
    const handleAddKasus = (event) => {
        event.preventDefault();
        axios.post('https://yayasanmptb.or.id.yamalitb.or.id/admin/', { name: 'darmawan' }).then(resp => {
            console.log(resp);
        })
        console.log('test!')
    }

    return (
        <div className='opacity-80 update mx-[25%] my-7 bg-slate-100 rounded-md p-4'>
            <h1 className='text-center text-xl font-semibold px-2'>Tambah Data Kasus</h1>
            <form onSubmit={handleAddKasus}>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Tahun: </label>
                        <input name='tahun' className='py-4 px-4 rounded' required pattern='20\d{2}' />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Semester: </label>
                        <input name='semester' className='py-4 px-4 rounded' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Kabupaten: </label>
                        <input name='kabupaten' className='py-4 px-4 rounded w-36' />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Jumlah Terduga: </label>
                        <input name='terduga' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>KasusTb: </label>
                        <input name='kasus' className='py-4 px-4 rounded w-36' required />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Berhasil: </label>
                        <input name='berhasil' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Meninggal: </label>
                        <input name='meninggal' className='py-4 px-4 rounded w-36' required />
                    </div>
                    <div className='py-4 px-4'>
                        <label>Defaul: </label>
                        <input name='defaul' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='py-4'>
                        <label>Gagal: </label>
                        <input name='gagal' className='py-4 px-4 rounded w-36' required />
                    </div>

                </div>
                <div className='flex flex-row'>

                    <div className='py-4 px-2'>
                        <button className='rounded w-56 bg-green-500 text-white py-4 px-4 text-lg' type='submit'>
                            Tambah Data</button>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default AddKasus;