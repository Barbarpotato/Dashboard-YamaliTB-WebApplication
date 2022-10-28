import React from 'react';
import { useTable } from 'react-table';
import '../Styles/content.css';

// function DefaultColumnFilter({
//     column: { filterValue, preFilteredRows, setFilter },
// }) {
//     const count = preFilteredRows.length

//     return (
//         <input
//             value={filterValue || ''}
//             onChange={e => {
//                 setFilter(e.target.value || undefined) // Set undefined to remove the filter entirely
//             }}
//             placeholder={`${count} Data Ditemukan...`}
//         />
//     )
// }

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
                name: 'Kim Parrish',
                address: '4420 Valley Street, Garnerville, NY 10923',
                date: '07/11/2020',
                order: '87349585892118',
            },
            {
                name: 'Michele Castillo',
                address: '637 Kyle Street, Fullerton, NE 68638',
                date: '07/11/2020',
                order: '58418278790810',
            },
            {
                name: 'Eric Ferris',
                address: '906 Hart Country Lane, Toccoa, GA 30577',
                date: '07/10/2020',
                order: '81534454080477',
            },
            {
                name: 'Gloria Noble',
                address: '2403 Edgewood Avenue, Fresno, CA 93721',
                date: '07/09/2020',
                order: '20452221703743',
            },
            {
                name: 'Darren Daniels',
                address: '882 Hide A Way Road, Anaktuvuk Pass, AK 99721',
                date: '07/07/2020',
                order: '22906126785176',
            },
            {
                name: 'Ted McDonald',
                address: '796 Bryan Avenue, Minneapolis, MN 55406',
                date: '07/07/2020',
                order: '87574505851064',
            },
        ]
    )

    //! Data Dummy.
    // Column Table
    const columns = React.useMemo(
        () => [
            {
                Header: 'User Info',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name'
                    },
                    {
                        Header: 'Address',
                        accessor: 'address',
                    },
                ],
            },
            {
                Header: 'Order Info',
                columns: [
                    {
                        Header: 'Date',
                        accessor: 'date',
                    },
                    {
                        Header: 'Order #',
                        accessor: 'order',
                    }, {
                        Header: "Edit",
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
                        Header: "Delete",
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

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data })

    return (
        // Ternary Operator. edit is true render the edit comp otherwise render the table.
        //!! edit component still a dummy
        <div className='content'>
            {edit ? <div className='update'>
                <form>
                    <div className='py-4'>
                        <input className='py-4 px-4 rounded w-96' value={selectData.name} placeholder='unkown' />
                    </div>
                    <div className='py-4'>
                        <input className='py-4 px-4 rounded w-96' placeholder='unkown' value={selectData.order} />
                    </div>
                    <div className='py-4'>
                        <button className='rounded w-96 bg-red-500 text-white py-4 px-4 text-lg' type='submit'
                            onClick={() => {
                                //! api request needed.
                                alert('Menolak Memperbaharui Data!');
                                setEdit(false);
                            }}>
                            Batal Perbaharui Data</button>
                    </div>
                    <div className='py-4'>
                        <button className='rounded w-96 bg-green-500 text-white py-4 px-4 text-lg' type='submit'
                            onClick={() => {
                                //! api request needed.
                                const confirm = window.confirm('Yakin Ingin Memperbaharui Data?')
                                if (confirm) {
                                    alert('Berhasil Memperbaharui Data!');
                                    setEdit(false);
                                }
                                else {
                                    alert('Menolak Memperbaharui Data!');
                                    setEdit(false);
                                }
                            }}>
                            Perbaharui Data</button>
                    </div>

                </form>
            </div>

                :

                <table {...getTableProps()}>
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()}
                                        style={{
                                            border: 'solid 2px black',
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
                                        border: 'solid 2px black',
                                        color: 'black'
                                    }}>
                                    {row.cells.map(cell => {
                                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                    })}
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            }
        </div>
    )
}

export default Content;