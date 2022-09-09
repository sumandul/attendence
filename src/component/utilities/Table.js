import React, { useEffect } from 'react'
import { useTable, usePagination } from 'react-table'
import ToolTip from './ToolTip'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    previousPage,
    nextPage,
    setPageSize,

    state,
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 10 },
    },
    usePagination,
  )
  const { pageIndex, pageSize } = state
  console.log(pageSize, 'pa')
  return (
    <>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row) => {
            prepareRow(row)
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      <div className="pagination mt-3  ">
        <button
          className="nav-btn"
          data-tip
          data-for="first"
          onClick={() => gotoPage(0)}
        >
          <KeyboardDoubleArrowLeftIcon className="nav-icon" />
        </button>
        <ToolTip id={'first'}>First Page </ToolTip>
        <button
          className="nav-btn"
          data-tip
          data-for="prev"
          onClick={previousPage}
        >
          <KeyboardArrowLeftIcon className="nav-icon" />
        </button>
        <ToolTip id={'prev'}>previousPage </ToolTip>
        <button className="nav-btn" data-tip data-for="next" onClick={nextPage}>
          <KeyboardArrowRightIcon className="nav-icon" />
        </button>
        <ToolTip id={'next'}>NextPage </ToolTip>
        <button
          className="nav-btn"
          data-tip
          data-for="last"
          onClick={() => gotoPage(pageCount - 1)}
        >
          <KeyboardDoubleArrowRightIcon className="nav-icon" />
        </button>
        <ToolTip id={'last'}>LastPage </ToolTip>
        <span className="me-4 page-p">
          page
          <strong className="page-p">
            {pageIndex + 1} of {pageOptions.length}
          </strong>
        </span>
        <select
          className="select-page"
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {[10, 20, 30].map((num) => {
            return (
              <option key={num} value={num}>
                show{num}
              </option>
            )
          })}
        </select>
      </div>
    </>
  )
}

export default Table
