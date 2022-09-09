import React, { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined'
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined'

const Menu = ({ setOpen, close }) => {
  window.addEventListener('resize', (e) => {
    console.log(e.target.value)
  })
  return (
    <Navbar bg="light" expand="lg" className="menu">
      <Container fluid>
        <Navbar.Brand href="#home">
          <div className="logo d-flex align-items-center">
            <AccessTimeIcon className="logo-icon" />{' '}
            <p className="ms-2">Payroll UI</p>
            <div onClick={() => setOpen(!close)}>
              <MenuOutlinedIcon className="ms-3 menu-icon" />
            </div>
          </div>
        </Navbar.Brand>

        <div className="icon d-flex">
          <div className="iocn-box">
            <PersonOutlineOutlinedIcon className="icon-item" />
          </div>
          <div className="iocn-box">
            <AlternateEmailIcon className="icon-item" />
            <div className="icon-circle">12</div>
          </div>
          <div className="iocn-box">
            <PersonOutlineOutlinedIcon className="icon-item" />
          </div>
          <div className="iocn-box">
            <NotificationsNoneOutlinedIcon className="icon-item" />
            <div className="icon-circle">12</div>
          </div>
          <div className="iocn-box">
            <NotificationsNoneOutlinedIcon className="icon-item" />
            <div className="icon-circle">12</div>
          </div>
        </div>
      </Container>
    </Navbar>
  )
}

export default Menu
