import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Table from './utilities//Table'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { userRows } from './Employeelist'
import {
  ImageSearchTwoTone,
  SettingsSystemDaydreamTwoTone,
} from '@material-ui/icons'
const AdminRight = () => {
  const [search, setSearch] = useState({
    name: '',
    id: '',
    department: '',
  })
  const [userRow, setUserRows] = useState(userRows)

  const handleChange = (e) => {
    const value = e.target.value
    setSearch({ ...search, [e.target.name]: value })
  }

  const handleFrom = (e) => {
    e.preventDefault()

    const filtered = userRow.filter((row) => {
      return (
        row.username === search.name ||
        row.code === parseFloat(search.id) ||
        row.demartment === search.department
      )
    })
    setUserRows(filtered)

    setSearch({ name: '', id: '', department: '' })
  }

  const columns = [
    {
      Header: 'Name',
      accessor: 'username',

      Cell: (tableProps) => {
        return (
          <>
            <div className="d-flex align-items-center">
              <img
                src={tableProps.row.original.avatar}
                className="table-img"
                alt="Player"
              />
              <p className="ms-1"> {tableProps.row.original.username}</p>
            </div>
          </>
        )
      },
    },

    {
      Header: 'Code',
      accessor: 'code',
    },
    {
      Header: ' Demartment',
      accessor: 'demartment',
      Cell: (tableProps) => {
        return (
          <>
            <button className="department-btn">
              {tableProps.row.original.demartment}
            </button>
          </>
        )
      },
    },
    {
      Header: 'Email',
      accessor: 'email',
    },
    {
      Header: ' Contact',
      accessor: 'contact',
    },
    {
      Header: ' Status',
      accessor: 'status',
      Cell: (tableProps) => {
        return (
          <>
            <div className="d-flex justify-content-between">
              <p>{tableProps.row.original.status}</p>
              <MoreVertIcon className="dots" />
            </div>
          </>
        )
      },
    },
  ]
  // console.log(userRows)
  return (
    <>
      <p className="hrm mb-2">HRM DashBoard</p>
      <Row className="gx-2 gy-2 ">
        <Col xs={6} md={3}>
          <div className="employee-box">
            <div className="d-flex justify-content-between pt-2 align-items-center">
              <p>Total Salery Paid</p>

              <button>View Detail</button>
            </div>
            <span className="">Rs.22333</span>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="employee-box">
            <div className="d-flex justify-content-between pt-2 align-items-center">
              <p>Today Attend</p>
              <button>View Detail</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="">55</span>
              <p>Employee</p>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="employee-box">
            <div className="d-flex justify-content-between pt-2 align-items-center">
              <p>Today Attend</p>
              <button>View Detail</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="">55</span>
              <p>Employee</p>
            </div>
          </div>
        </Col>
        <Col xs={6} md={3}>
          <div className="employee-box">
            <div className="d-flex justify-content-between pt-2 align-items-center">
              <p>Today Attend</p>
              <button>View Detail</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <span className="">55</span>
              <p>Employee</p>
            </div>
          </div>
        </Col>
      </Row>
      <div className="employee-detail">
        <div className="employee-left">
          <div className="employee-list px-3 py-3">
            <h6 className="mb-4">Employee</h6>
            <div className="employee-top  ">
              <form action="" onSubmit={handleFrom}>
                <Row className="gy-3">
                  <Col sm={4} md={4}>
                    <input
                      type="text"
                      name="name"
                      value={search.name}
                      placeholder="Employee Name"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={3} md={3}>
                    <input
                      type="text"
                      name="id"
                      value={search.id}
                      placeholder="Employee Id"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={3} md={3}>
                    <input
                      type="text"
                      value={search.department}
                      name="department"
                      placeholder="Employee Department"
                      onChange={handleChange}
                    />
                  </Col>
                  <Col sm={2} md={2}>
                    <button type="submit" className="search-btn">
                      Search
                    </button>
                  </Col>
                </Row>
              </form>
              <div className="mt-4">
                <div class="table-responsive-sm">
                  <Table columns={columns} data={userRow} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="employee-right">
          <div className="employe-abs">
            <div className="absent-list">
              <h6 className="mb-3">Absent Today</h6>
              <div className="absent-list">
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart">
                    <button className="depart-btn">Web Design</button>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart">
                    <button className="depart-btn">Web Design</button>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart">
                    <button className="depart-btn">Web Design</button>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart">
                    <button className="depart-btn">Web Design</button>
                  </div>
                </li>
              </div>
            </div>
          </div>
          <div className="employe-abs mt-3">
            <div className="absent-list">
              <h6 className="mb-3">Leave Request</h6>
              <div className="absent-list">
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart d-flex">
                    <button className="depart-btn me-2">Aug 22</button>
                    <div>
                      {' '}
                      <MoreVertIcon className="dots" />
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart d-flex">
                    <button className="depart-btn me-2">Aug 22</button>
                    <div>
                      <MoreVertIcon className="dots" />
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart d-flex">
                    <button className="depart-btn me-2">Aug 22</button>
                    <div>
                      {' '}
                      <MoreVertIcon className="dots" />
                    </div>
                  </div>
                </li>
                <li className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <div className="img-box">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRV7sc6ksWklKCPm1Cx_yhpV45IzYOlpv7DQ&usqp=CAU"
                        alt=""
                        className="img-fluid"
                      />
                    </div>
                    <div className="name ps-1"> Suman Dulal</div>
                  </div>
                  <div className="depart d-flex">
                    <button className="depart-btn me-2">Aug 22</button>
                    <div>
                      {' '}
                      <MoreVertIcon className="dots" />
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminRight
