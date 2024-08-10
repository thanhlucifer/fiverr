import React from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../logo/LogoIcon'
import { path } from '../../common/path'
import { useSelector } from 'react-redux'
import { Avatar, Dropdown } from 'antd'
import UserIcon from '../logo/UserIcon'
import LogoutIcon from '../logo/LogoutIcon'
import FormSearchProduct from '../Form/FormSearchProduct'
import WrapperSuggestJob from '../Wrapper/WrapperSuggestJob'
const items = [
  {
    label: <Link className='flex space-x-2 items-center '><UserIcon /> <span>Thông tin cá nhân</span></Link>,
    key: '0',
  },
  {
    label: <Link className='flex space-x-2 items-center '><LogoutIcon /> <span>Đăng xuất</span></Link>,
    key: '1',
  },
  
];

const UserHeader = () => {
  const { infoUser } = useSelector((state) => state.authSlide)
  console.log(infoUser)
  const checkuserLogin = () => {
    return infoUser ? <Dropdown
      menu={{
        items,
      }}
      trigger={['click']}
    > <Avatar style={{
      backgroundColor: '#7265e6',
      verticalAlign: 'middle',
      cursor: 'pointer',
    }}
      size="large">{infoUser.user.name.charAt(0).toUpperCase()}</Avatar > 
      </Dropdown> : <>
      <Link to={path.signin} className='py-2 px-5 rounded-md  duration-300 hover:text-green-500 font-medium'>Sign in</Link>
      <Link to={path.signup} className='py-2 px-5  text-green-500 rounded-md border  border-green-500 duration-300 hover:bg-green-500 hover:text-white'>Join</Link>
    </>
  }
  return (
    <header className='py-5'>
      <div className="container">
        <div className="content flex items-center justify-between ">
          <div className="header_logo flex items-center space-x-5 ">
            <Link to={path.home}>
              <LogoIcon />
            </Link>
          <WrapperSuggestJob>
          <FormSearchProduct />
          </WrapperSuggestJob>
          </div>
          <nav className="header_nav space-x-5">
            {checkuserLogin()}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default UserHeader