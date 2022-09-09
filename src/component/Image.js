import React from 'react'

const Image = ({ src }) => {
  console.log(src)
  return (
    <div>
      <img src={src} alt="" />
    </div>
  )
}

export default Image
