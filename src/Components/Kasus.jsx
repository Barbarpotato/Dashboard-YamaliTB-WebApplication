import React from 'react';
import { useTable } from 'react-table';
import '../Styles/content.css';

function Content() {

    // Decide to render edit menu or not.
    const [edit, setEdit] = React.useState(false);

    // pick up the specific data to edit.
    const [selectData, setSelectData] = React.useState({});

    //! Data Dummy.
    //! api request needed.
    // Row Data.
    const [data, setData] = React.useState(
        [
            {
                tahun: '2021',
                semester: '1',
                kabupaten: 'Bulukumba',
                terduga: '167',
            },
            {
                tahun: '2021',
                semester: '1',
                kabupaten: 'Jeneponto',
                terduga: '146',
            }
            ,
            {
                tahun: '2021',
                semester: '1',
                kabupaten: 'Bone',
                terduga: '5',
            },
            {
                tahun: '2021',
                semester: '1',
                kabupaten: 'Pinrang',
                terduga: '393',
            }
        ]
    )

    //! Data Dummy.
    // Column Table
    const columns = React.useMemo(
        () => [
            {
                Header: 'Data Kasus Kabupaten',
                columns: [
                    {
                        Header: 'Tahun',
                        accessor: 'tahun'
                    },
                    {
                        Header: 'Semester',
                        accessor: 'semester',
                    },
                    {
                        Header: 'Kabupaten/Kota',
                        accessor: 'kabupaten',
                    },
                    {
                        Header: 'Terduga TB',
                        accessor: 'terduga',
                    }, {
                        Header: "Ubah Data",
                        Cell: (tableProps) => (
                            <button
                                onClick={() => {
                                    //! api request needed.
                                    const confirm = window.confirm('Apakah Anda Ingin Mengubah Data ini?')
                                    if (confirm) {
                                        console.log(tableProps.row.values);
                                        setSelectData(tableProps.row.values);
                                        setEdit(true);
                                    }
                                }}>
                                <i class="fa fa-pencil-square-o" aria-hidden="true"></i>
                            </button>
                        )
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
                ],
            },
        ],
        [data]
    )

    // setting up the table properties
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    // handling edit form data
    const handleEdit = (event) => {
        const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
        if (confirm) {
            event.preventDefault();
            alert('Berhasil Memperbaharui Data!');
            console.log(event.target.elements.tahun);
            setEdit(false);
        }
        else {
            alert('Menolak Memperbaharui Data!');
            setEdit(false);
        }
        event.preventDefault();
        //! api request needed.
        // console.log(event.target.tahun.value);
    }

    return (
        // Ternary Operator. edit is true render the edit comp otherwise render the table.
        //!! edit component still a dummy
        <div className='content'>
            {edit ? <div className='opacity-80 update mx-[25%] my-[12%] bg-slate-100 rounded-md p-4'>
                <h1 className='text-center text-xl font-semibold px-2'>Perbaharui Data Kasus</h1>
                <form onSubmit={handleEdit}>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Tahun: </label>
                            <input name='tahun' className='py-4 px-4 rounded' required pattern='20\d{2}' placeholder={selectData.tahun} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Semester: </label>
                            <input name='semester' className='py-4 px-4 rounded' readOnly value={selectData.semester} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4'>
                            <label>Kabupaten: </label>
                            <input name='kabupaten' className='py-4 px-4 rounded w-36' readOnly value={selectData.kabupaten} />
                        </div>
                        <div className='py-4 px-4'>
                            <label>Jumlah Terduga: </label>
                            <input name='terduga' pattern='\d{1,}' title='data input tidak valid' required className='py-4 px-4 rounded w-36' placeholder={selectData.terduga} />
                        </div>
                    </div>
                    <div className='flex flex-row'>
                        <div className='py-4 px-2'>
                            <button className='rounded w-56 bg-red-500 text-white py-4 px-4 text-lg'
                                onClick={() => {
                                    // back to the table component after user reject update data
                                    alert('Menolak Memperbaharui Data!');
                                    setEdit(false);
                                }}>
                                Batal Perbaharui Data</button>
                        </div>
                        <div className='py-4 px-2'>
                            <button className='rounded w-56 bg-green-500 text-white py-4 px-4 text-lg' type='submit'>
                                Perbaharui Data</button>
                        </div>
                    </div>
                </form>
            </div >

                :

                <table {...getTableProps()} >
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}
                                        style={{
                                            opacity: 0.6,
                                            fontSize: '25px',
                                            border: 'solid 1px black',
                                            background: 'white',
                                            color: 'black',
                                            fontWeight: 'bold',
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
                                        backgroundColor: 'white',
                                        color: 'black'
                                    }}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}
                                            style={{ opacity: 0.7, border: 'solid 0.1px black', fontSize: '20px', padding: '20px 20px 20px 20px' }}
                                        >{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>

            }
        </div >
    )
}

export default Content;