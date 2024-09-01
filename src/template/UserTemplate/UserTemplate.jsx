import React from 'react'
import UserHeader from '../../components/UserHeader/UserHeader'
import UserFooter from '../../components/UserFooter/UserFooter'
import { Outlet } from 'react-router-dom'
import BannerSearch from '../../components/BannerSearch/BannerSearch'
import CategoriesSection from '../../components/CategoriesSection/CategoriesSection'
import Vertical from '../../components/Vertical/Vertical'

const UserTemplate = () => {
  return (
    <>
        <UserHeader></UserHeader>
        <BannerSearch/>
        <CategoriesSection/>
        <main className='main-content my-6'>
            <Outlet></Outlet>
        </main>
        <Vertical/>
        <UserFooter></UserFooter>
    </>
  )
}

export default UserTemplate