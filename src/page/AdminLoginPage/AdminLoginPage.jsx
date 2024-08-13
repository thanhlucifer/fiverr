import React, { useContext } from 'react'
import InputCustom from '../../components/Input/InputCustom'
import { useFormik } from 'formik'
import { authservice } from '../../service/auth.service'
import { NotificationContext } from '../../App'
import { getLocalStorage, setLocalStorage } from '../../util/util'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getInfoUSer } from '../../redux/authSlide'
const AdminLoginPage = () => {
    const { showNotification } = useContext(NotificationContext)
    const navigate = useNavigate()
    const dispath = useDispatch()
    const { handleSubmit, handleChange, values } = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (value) => {
            console.log(value)
            authservice.signIn(value).then((res) => {
                console.log(res)
                if (res.data.content.user.role == "USER") {
                    showNotification('Ban khong co quyen truy cap', 'error', 2000)
                    let solanvipham = getLocalStorage('viPham')
                    if (!solanvipham) {
                        setLocalStorage('viPham', 1)
                    }else{
                        solanvipham++
                        solanvipham == 3 ? window.location.href = 'https://www.facebook.com/22112002.tlt' : 
                        setLocalStorage('viPham', solanvipham)
                    }
                } else {
                    setLocalStorage('user', res.data.content)
                    dispath(getInfoUSer(res.data.content))
                    navigate('/admin')

                }
            }).catch((err) => {
                console.log(err)
                showNotification('Tai khoan hoac mat khau khong chinh xac', 'error')
            })
        },
    })
    return (
        <div className='container'>
            <div className="admin_login flex h-screen">
                <div className="adim_login_img w-1/2"></div>
                <div className='admin_login-form w-1/2 flex flex-col justify-center h-full'>
                    <h2 className='font-bold '>Dang nhap danh cho admin</h2>
                    <form action="" onSubmit={handleSubmit} className='space-y-5'>
                        <InputCustom lablecontent='Tai khoan' onChange={handleChange} value={values.email} name={'email'}></InputCustom>
                        <InputCustom lablecontent='Mat khau' typeInput='password' onChange={handleChange} value={values.password} name={'password'}></InputCustom>
                        <div>
                            <button className='py-3 px-5 w-full bg-black text-white rounded-md'>Login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AdminLoginPage