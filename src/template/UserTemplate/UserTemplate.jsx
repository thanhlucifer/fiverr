import React from 'react'
import UserHeader from '../../components/UserHeader/UserHeader'
import UserFooter from '../../components/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'
import BannerSearch from '../../components/BannerSearch/BannerSearch'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'

const UserTemplate = () => {
  return (
    <>
        <UserHeader></UserHeader>
        <main className='main-content'>
            <BannerSearch/>
            <CategoriesSection/>
            <Outlet></Outlet>
        </main>
        <UserFooter></UserFooter>
    </>
  )
}

export default UserTemplate