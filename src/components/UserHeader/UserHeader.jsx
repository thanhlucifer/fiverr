import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LogoIcon from '../logo/LogoIcon'
import { path } from '../../common/path'
import { useSelector } from 'react-redux'
import { Avatar, Button, Dropdown, Space } from 'antd'
import UserIcon from '../logo/UserIcon'
import LogoutIcon from '../logo/LogoutIcon'
import FormSearchProduct from '../Form/FormSearchProduct'
import WrapperSuggestJob from '../Wrapper/WrapperSuggestJob'
import { logout } from '../../redux/authSlide'
import { useDispatch } from 'react-redux'
import { DownOutlined } from '@ant-design/icons';


const UserHeader = () => {
  const { infoUser } = useSelector((state) => state.authSlide)
  const dispatch = useDispatch()
  const [showSearchForm, setShowSearchForm] = useState(false); // Trạng thái hiển thị của FormSearchProduct
  const handleLogout = () => {
    dispatch(logout())
  }
  const items = [
    {
      label: <Link className='flex space-x-2 items-center '><UserIcon /> <span>Thông tin cá nhân</span></Link>,
      key: '0',
    },
    {
      label: <Link onClick={handleLogout} className='flex space-x-2 items-center '><LogoutIcon /> <span>Đăng xuất</span></Link>,
      key: '1',
    },

  ];
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

  useEffect(() => {
    const handleScroll = () => {
      const bannerElement = document.querySelector('.banner-search');
      if (bannerElement) {
        const bannerHeight = bannerElement.offsetHeight; // Lấy chiều cao của banner
        if (window.scrollY > bannerHeight) {
          setShowSearchForm(true);
        } else {
          setShowSearchForm(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className='py-6 fixed top-0 left-0 right-0 z-50 bg-white shadow'>
      <div className="container">
        <div className="content flex items-center justify-between">
          <div className="header_logo flex items-center space-x-5 ">
            <Link to={path.home}>
              <LogoIcon />
            </Link>
            <div className={`transition-opacity duration-300 ${showSearchForm ? 'opacity-100' : 'opacity-0'}`}
              style={{ visibility: showSearchForm ? 'visible' : 'hidden' }}>
              {showSearchForm && (
                <WrapperSuggestJob>
                  <FormSearchProduct />
                </WrapperSuggestJob>
              )}
            </div>

          </div>
          <nav className="header_nav space-x-3">
            <Link className='py-2 px-5 rounded-md  duration-300 hover:text-green-500 font-medium'>Fiverr Pro</Link>
            <Link className='py-2 px-5 rounded-md  duration-300 hover:text-green-500 font-medium'>Explore</Link>
            <Link className='py-2 px-5 rounded-md  duration-300 hover:text-green-500 font-medium'>Become a Seller</Link>
            {checkuserLogin()}
          </nav>
        </div>
      </div>
    </header>
  )
}

export default UserHeader