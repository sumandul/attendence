import React from 'react'
import Accordion from 'react-bootstrap/Accordion'
import PeopleIcon from '@mui/icons-material/People'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight'
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import CreditScoreIcon from '@mui/icons-material/CreditScore'
import ConstructionIcon from '@mui/icons-material/Construction'
import GroupAddIcon from '@mui/icons-material/GroupAdd'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone'
import MarkunreadIcon from '@mui/icons-material/Markunread'
const AdminLeft = () => {
  return (
    <>
      <div className="side-bar">
        <div className="admin-side-menu">
          <div className="main">
            <h5>MAIN</h5>
            <ul className="mt-1">
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <PeopleIcon className="side-icon" />{' '}
                  <p className="ms-2">Employee</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>

              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <LocalLibraryIcon className="side-icon" />{' '}
                  <p className="ms-2">Leave</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <AccountBalanceWalletIcon className="side-icon" />{' '}
                  <p className="ms-2">Payroll</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <AccessTimeIcon className="side-icon" />{' '}
                  <p className="ms-2">Time Sheet</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <CreditScoreIcon className="sde-icon" />{' '}
                  <p className="ms-2">Loan / Chain</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <ConstructionIcon className="side-icon" />{' '}
                  <p className="ms-2">Tool</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <GroupAddIcon className="side-icon" />{' '}
                  <p className="ms-2">Hr Managment</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
            </ul>
          </div>
          <div className="main">
            <h5 className=" my-2">SETTING</h5>
            <ul className="">
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <AccountBalanceIcon className="side-icon" />{' '}
                  <p className="ms-2">Account Setting</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>

              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <NotificationsNoneIcon className="side-icon" />{' '}
                  <p className="ms-2">Notification</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <MarkunreadIcon className="side-icon" />{' '}
                  <p className="ms-2">Email</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
            </ul>
          </div>
          <div className="main">
            <h5 className=" my-2">WEBSITE UPDATE</h5>
            <ul className="">
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <AccountBalanceIcon className="side-icon" />{' '}
                  <p className="ms-2">Website Setting</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>

              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <NotificationsNoneIcon className="side-icon" />{' '}
                  <p className="ms-2">Front Page Updae</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
              <li className="d-flex align-items-center justify-content-between">
                <div className="menu-icon d-flex align-items-center ">
                  <MarkunreadIcon className="side-icon" />{' '}
                  <p className="ms-2">Post Update</p>
                </div>
                <KeyboardArrowRightIcon className="arrow" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default AdminLeft
