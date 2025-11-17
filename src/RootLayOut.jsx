import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './NavBar'

const RootLayOut = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>

    </div>
  )
}

export default RootLayOut
