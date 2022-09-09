import React, { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './assets/css/styles.css'
import Menu from './component/Navbar'
import Admin from './component/Admin'
const App = () => {
  const [close, setOpen] = useState(false)
  return (
    <>
      <Menu setOpen={setOpen} close={close} />
      <Admin close={close} />
    </>
  )
}

export default App
