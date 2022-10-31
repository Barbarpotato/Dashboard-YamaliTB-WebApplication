import React, { useState, useMemo } from 'react';
import { useTable } from 'react-table';
import '../Styles/content.css';

function DelBerita() {

    const [selectData, setSelectData] = React.useState({});

    const [data, setData] = useState([
        {
            tanggal: "22-09-18",
            waktu: '2022-10-25 19:23:48',
            judul: 'Magang Kampus Merdeka di BCF-Yamali TB, 24 Mahasiswa',
            isi1: 'MALINO -  Kampus Merdeka menjadi salah satu kebijakan....',
            gambar1: 'link1',
            isi2: 'Berinteraksi secara langsung untuk kali pertama...',
            gambar2: 'link2'
        },
        {
            tanggal: "22-09-18",
            waktu: '2022-10-25 19:23:48',
            judul: 'Magang Kampus Merdeka di BCF-Yamali TB, 24 Mahasiswa',
            isi1: 'MALINO -  Kampus Merdeka menjadi salah satu kebijakan....',
            gambar1: 'link1',
            isi2: 'Berinteraksi secara langsung untuk kali pertama...',
            gambar2: 'link2'
        }
    ]);

    const columns = useMemo(() => [
        {
            Header: 'Data Publikasi Berita',
            columns: [
                {
                    Header: 'Tanggal',
                    accessor: 'tanggal'
                },
                {
                    Header: 'Waktu',
                    accessor: 'waktu'
                },
                {
                    Header: 'Judul',
                    accessor: 'judul'
                },
                {
                    Header: 'Deksripsi 1',
                    accessor: 'isi1'
                },
                {
                    Header: 'Gambar 1',
                    accessor: 'gambar1'
                },
                {
                    Header: 'Deskripsi 2',
                    accessor: 'isi2'
                },
                {
                    Header: 'Gambar 2',
                    accessor: 'gambar2'
                },

                {
                    Header: "Hapus",
                    Cell: (tableProps) => (
                        <button onClick={() => {
                            //! api request needed.
                            const confirm = window.confirm('Apakah Anda Ingin Menghapus Data ini?')
                            if (confirm) {
                                const dataCopy = [...data];
                                dataCopy.splice(tableProps.row.index, 1);
                                alert('Data Berhasil Dihapus!');
                                setData(dataCopy);

                            }
                        }}>
                            <i className="fa fa-trash" aria-hidden="true"></i>
                        </button>
                    )
                }
            ]
        }
    ], [data])

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        <div className='content'>
            <div>
                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}
                                        style={{
                                            fontSize: '20px',
                                            border: 'solid 1px black',
                                            background: 'white',
                                            color: 'black',
                                            fontWeight: 'bold',
                                            opacity: 0.6

                                        }}>{column.render('Header')}
                                        {/* <div>{column.canFilter ? column.render('Filter') : null}</div> */}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps()}
                                    style={{
                                        border: 'solid 1px black',
                                        color: 'black',

                                    }}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()} style={{ border: 'solid 0.5px black', opacity: 0.7, fontSize: '20px', padding: '20px 20px 20px 20px' }}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    )

};

export default DelBerita;