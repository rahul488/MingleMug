import React from 'react'
import { Outlet } from 'react-router'

const Main = () => {
  return (
    <div className='z-0'>
        <Outlet />
    </div>
  )
}

export default Main