import React from 'react';
import { useTable, useSortBy } from 'react-table';

function Content() {
    // Data Dummy.
    const data = React.useMemo(() =>
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
        ],
        []
    )

    // Data Dummy.
    const columns = React.useMemo(
        () => [
            {
                Header: 'User Info',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                        sortType: 'basic'
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
                    },
                ],
            },
        ],
        []
    )

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
    } = useTable({ columns, data }, useSortBy)

    return (
        <div className='text-center'>
            <table {...getTableProps()}>
                <thead>
                    {headerGroups.map(headerGroup => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map(column => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}
                                    style={{
                                        border: 'solid 2px black',
                                        background: 'white',
                                        color: 'black',
                                        fontWeight: 'bold',
                                    }}>{column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                                    </span>
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
        </div>
    )
}

export default Content;