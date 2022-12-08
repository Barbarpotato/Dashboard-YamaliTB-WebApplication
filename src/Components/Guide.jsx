import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '../Styles/content.css';
import { motion } from 'framer-motion';
import Beranda1 from '../Images/Beranda1.png';
import Beranda2 from '../Images/Beranda2.png';
import Addinfo1 from '../Images/Addinfo1.png';
import Addinfo2 from '../Images/Addinfo2.png';
import Addinfo3 from '../Images/Addinfo3.png';
import Data1 from '../Images/Data1.png';
import Data2 from '../Images/Data2.png';
const Guide = () => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.8,
                ease: [0, 0.71, 0.2, 1.01]
            }}
            className='content'>
            <h1 className='text-3xl font-semibold py-8'>*Panduan Penggunaan Aplikasi Dashboard</h1>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <h1 className='text-2xl'>Laman Beranda</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Halaman Pembuka.
                        <img alt='tutorial' src={Beranda1}></img>
                        Bagian ini merupakan sebuah informasi singkat yang menjelaskan berapa banyak jumlah data Artikel yang
                        telah dibuat oleh Pihak Admin, Jumlah data Berita serta jumlah kasus yang terdata pada tahun ini.
                        <br></br>
                        <br></br>
                        2. Pemilihan Data Kasus untuk di Visualisasikan.
                        <img alt='tutorial2' src={Beranda2}></img>
                        Bagian ini pengguna akan memilih data apa yang akan di visualisasikan terdapat 3 kategori yang
                        wajib diisi oleh pengguna admin agar dapat melihat data kasus. Setelah Pengguna Memilih 3 kategori yang ditentukan,
                        Pengguna bisa mengklik Tampilkan Data.
                        <br></br><br></br>
                        3. Data Siap dilihat.<br></br>
                        Setelah Pengguna Mengklik Tampilkan Data yang berwarna hijau. Pengguna bisa melihat visualisasi data yang telah
                        disajikan dalam aplikasi dashboard ini. Mulai dari Pie Chart, BarChart, Radar, dan lain-lain.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h1 className='text-2xl'>Laman Artikel & Berita</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Sub Menu Tambah Data<br></br>
                        Pada Bagian ini admin dapat mengisi semua inputan yang disediakan. ada beberapa inputan yang
                        waji untuk diisi oleh pihak admin. yaitu Judul, Deskripsi Berita1, Gambar1.
                        untuk Deskripsi Berita2, dan Gambar2 merupakan opsional inputan. sehingga bisa di abaikan jika
                        berita atau artikel tidak memiliki deskripsi lainnya.<br></br><br></br>
                        A. Link Gambar <br></br>
                        Untuk inputan Link Gambar, mohon diperhatikan format Linknya.
                        cara melakukan input link gambar melalui google drive yaitu:
                        <br></br>
                        a) Masuk ke dalam google drive<br></br>
                        b) setelah masuk kedalam google drive, jika gambar yang di inginkan belum terdapat pada google drive, maka pengguna bisa melakukan upload gambar di google drive yang di inginkan.
                        c) setelah gambar berada di google drive, klik kanan dan pilih menu Share/
                        <img alt='tutorial3' src={Addinfo1}></img><br></br>
                        d) Lalu Atur General Accessnya menjadi anyone with this link. lalu tekan tombol Done berwarna biru.
                        <img alt='tutorial4' src={Addinfo2}></img><br></br>
                        e) Setelah klik done, klik kanan kembali gambar yang ingin diupload, setelah itu klik copy link
                        yang berada disamping kiri tombol done berwarna biru.<br></br>
                        f) Kembali Ke Aplikasi Dashboard tekan CTRL+V secara bersamaan di inputan gambar1 atau gambar2. dan hasilnya akan seperti ini:
                        <img alt='tutorial5' src={Addinfo3}></img>
                        <br></br><br></br>
                        2. Sub Menu Hapus Data
                        <br></br> Pada Bagian ini, cukup mencari tombol Hapus Data berwarna merah maka data akan terhapus.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h1 className='text-2xl'>Laman Kasus</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Sub Menu Tambah Kasus
                        <br></br> Pada Bagian ini, inputan wajib diisi semua. dan nilai inputan harus dalam bentuk angka,
                        kecuali kabupaten itu sendiri yang bentuknya berupa kata.<br></br><br></br>
                        2. Sub Menu Hapus dan Edit Data<br></br>
                        Pada Bagian ini, terdapat 2 fitur untuk memanipulasi data kasus Tubercolosis, yang pertama
                        merupakan edit data dimana pada bagian ini data tb yang sudah ada, akan di ubah sesuai dengan keinginan pengguna.
                        kemudian terdapat fitur hapus data dimana pada bagian ini akan menghapus data sesuai dengan data yang dipilih terdapat beberapa peringatan
                        sebelum data tersebut akan dihapus secara permanen.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <h1 className='text-2xl'>Data Donasi & Pendaftaran Kader</h1>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        1. Data Donasi Website dan Data Pendaftaran Kader.<br></br>
                        Untuk dapat mengkakses data yang telah di input oleh user melalui Google Form,
                        Pengguna harus login akun google Yamali dimana pengguna menggunakan aplikasi dashboard ini.
                        <br></br><br></br>
                        2. Klik Data Donasi Website / Data Pendaftaran Kader.<br></br>
                        setelah Login Akun Google Yamali, maka kita bisa mengklik tombol yang telah disediakan di aplikasi dashboard
                        untuk menuju ke response atau data yang telah di isi oleh user sebelumnya.
                        contoh response google form user.
                        <img alt='tutorial-end' src={Data1}></img>
                        3. Simpan Data dalam bentuk SpreadSheet / Excel.
                        Pengguna Bisa menyimpan inputan user ke dalam bentuk spreadsheet atau excel dengan cara mengklik tombol ini pada laman google drive:
                        <img alt='tutorial' src={Data2}></img>
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </motion.div>

    )
}

export default Guide;