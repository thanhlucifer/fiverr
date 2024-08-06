import React from 'react'
import UserHeader from '../../components/UserHeader/UserHeader'
import UserFooter from '../../components/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'

const UserTemplate = () => {
  return (
    <>
        <UserHeader></UserHeader>
        <main>
            <Outlet></Outlet>
        </main>
        <UserFooter></UserFooter>
    </>
  )
}

export default UserTemplate