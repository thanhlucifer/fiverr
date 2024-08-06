import React from 'react'
import signAnimtion from '../../assets/animations/signAnimation.json'
import { useLottie } from 'lottie-react'
import InputCustom from '../../components/Input/InputCustom';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { authservice } from '../../service/auth.service.js';
const LoginPage = () => {
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
        onSubmit: (value) => {
            console.log(value)
            authservice.signIn(value).then((res) => {
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
        },
        validationSchema: Yup.object({
            email: Yup.string().required('Vui long nhap email').email('Email khong hop le'),
            password: Yup.string().required('Vui long nhap password').min(6,'Vui long nhap toi thieu 6 ky tu').max(10, 'Vui long nhap toi da 10 ky tu')
        })
    })
    return (
        <div className=''>
            <div className="loginpage_content flex items-center h-screen">
                <div className="loginpage_img w-2/3">
                    {View}
                </div>
                <div className="loginpage_content w-1/3">
                    <form className='space-y-5' onSubmit={handleSubmit}>
                        <h1 className="text-3xl font-bold">Login</h1>
                        <InputCustom lablecontent="Email"  placeholder="Vui long nhap email" onChange={handleChange} value={values.email}  name={'email'} error={errors.email} touched={touched} handleBlur={handleBlur}/>
                        <InputCustom lablecontent="Password"  placeholder="Vui long nhap password"  typeInput='password' onChange={handleChange} value={values.password}  name={'password'} error={errors.password} touched={touched} handleBlur={handleBlur}/>
                        <div>
                            <button type="submit" className="inline-block w-2/3 bg-black text-white py-2 px-5 rounded-md font-bold">Login</button>
                            <Link className='mt-3 text-blue-500 inline-block hover:underline duration-300'>Chua co tai khoan, bam vao day</Link>
                        </div>                   
                    </form>
                </div>
            </div>

        </div>
    )
}

export default LoginPage