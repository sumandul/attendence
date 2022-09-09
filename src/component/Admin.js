import React from 'react'
import AdminLeft from './AdminLeft'
import AdminRight from './AdminRight'
const Admin = ({ close }) => {
  return (
    <>
      <div className="admin-container">
        <div className={close ? 'left-side' : 'left'}>
          <AdminLeft />
        </div>

        <div className="right">
          <AdminRight />
        </div>
      </div>
    </>
  )
}

export default Admin
