import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../logo/LogoIcon'
import { path } from '../../common/path'
const UserHeader = () => {
  return (
    <header className='py-5'>
        <div className="container">
           <div className="content flex items-center justify-between ">
           <div className="header_logo">
                <Link to={path.home}>
                <LogoIcon />
                </Link>
            </div>
            <nav className="header_nav space-x-5">
                <Link to={path.signin} className='py-2 px-5 rounded-md  duration-300 hover:text-green-500 font-medium'>Sign in</Link>
                <Link to={path.signup} className='py-2 px-5  text-green-500 rounded-md border  border-green-500 duration-300 hover:bg-green-500 hover:text-white'>Join</Link>
            </nav>
           </div>
        </div>
    </header>
  )
}

export default UserHeader