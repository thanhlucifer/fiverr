import React, { useContext } from 'react'
import signAnimtion from '../../assets/animations/signAnimation.json'
import { useLottie } from 'lottie-react'
import InputCustom from '../../components/Input/InputCustom';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authservice } from '../../service/auth.service.js';
import { setLocalStorage } from '../../util/util.js';
import { NotificationContext } from '../../App';
import { useDispatch } from 'react-redux';
import  {getInfoUSer}  from '../../redux/authSlide.js';
import useResponsive from '../../hook/useResponsive.jsx';
import { path } from '../../common/path.js';

const LoginPage = () => {
    const isReponsive = useResponsive({
        mobile: 576,
        tablet: 768,
        
    })
    //console.log(isReponsive)
    const navigate = useNavigate()
    const dispath = useDispatch()
    const { showNotification } = useContext(NotificationContext)
    const options = {
        animationData: signAnimtion,
        loop: true
    };

    const { View } = useLottie(options);
    // NV1: thuc hien setup formik trong form login page
    // NV2: gan cac thuoc tinh can cho cac thuoc tinh input vao 2 component input custom
    // NV3: gan validation cho 2 inputcustom: email(required, email) password(required, min 6, max 10)
    // NV4: thuc hien test phan form xem cac onsubmit va validation co hoat dong dung hay khong
    const {handleSubmit, handleChange, values, errors, touched, handleBlur} = useFormik({
        initialValues: {
            email: '',
            password: ''
        },
        onSubmit: async (value) => {
            try {
                const res = await authservice.signIn(value);
                console.log(res)
                setLocalStorage('user', res.data.content);
                dispath(getInfoUSer(res.data.content));
                showNotification('Đăng nhập thành công', 'success', 2000);
                setTimeout(() => {
                    navigate('/');
                }, 1000);
            } catch (err) {
                console.log(err);
                showNotification(err.response.data.content, 'error');
            }
        },
        onSubmit: (value) => {
            console.log(value)
            authservice.signIn(value).then((res) => {
                console.log(res)
                setLocalStorage('user', res.data.content)
                dispath(getInfoUSer(res.data.content))
                //thuc hien thong bao va chuyen huong nguoi dung
                showNotification('Đăng nhập thành công', 'success', 2000)
                setTimeout(() => {
                    navigate('/')
                },1000)
            }).catch((err) => {
                console.log(err)
                showNotification(err.response.data.content, 'error')
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Vui long nhap email').email('Email khong hop le'),
            password: Yup.string().required('Vui long nhap password').min(6,'Vui long nhap toi thieu 6 ky tu').max(10, 'Vui long nhap toi da 10 ky tu')
        })
    })
    return (
        <div className='container'>
            <div className={`loginpage_content ${isReponsive.mobile ? 'block' : 'flex'} items-center h-screen`}>
                <div className={`loginpage_img ${isReponsive.mobile ? 'w-full' : 'w-1/2'}`}>
                    {View}
                </div>
                <div className={`loginpage_content ${isReponsive.mobile ? 'w-full' : 'w-1/2'}`}>
                    <form className='space-y-5' onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold">Login</h1>
                        <InputCustom lablecontent="Email"  placeholder="Vui long nhap email" onChange={handleChange} value={values.email}  name={'email'} error={errors.email} touched={touched} handleBlur={handleBlur}/>
                        <InputCustom lablecontent="Password"  placeholder="Vui long nhap password"  typeInput='password' onChange={handleChange} value={values.password}  name={'password'} error={errors.password} touched={touched} handleBlur={handleBlur}/>
                        <div>
                            <button type="submit" className="inline-block w-full bg-black text-white py-2 px-5 rounded-md font-bold">Login</button>
                            <Link className='mt-3 text-blue-500 inline-block hover:underline duration-300' to={path.signup}>Chua co tai khoan, bam vao day</Link>
                        </div>                   
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage