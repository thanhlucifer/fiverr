import React, { useState, useEffect, useContext } from 'react';
import { Select } from 'antd';
import InputCustom from '../../components/Input/InputCustom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllSkillApi } from '../../redux/skillSlice';
import { nguoiDungService } from '../../service/nguoiDung.service';
import { NotificationContext } from '../../App';
import { useLottie } from 'lottie-react'
import registerAnimation from '../../assets/animations/registeranimation.json'
import useResponsive from '../../hook/useResponsive.jsx';
import { Link } from 'react-router-dom';
import { path } from '../../common/path.js';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
    phone: Yup.string().matches(/^[0-9]+$/, 'Phone number must be numeric').required('Phone is required'),
    birthday: Yup.string().required('Birthday is required'),
    gender: Yup.boolean().required('Gender is required'),
    skill: Yup.array().min(1, 'At least one skill is required'),
    certification: Yup.array().min(1, 'At least one certification is required')
});

const RegisterPage = () => {
    const dispatch = useDispatch();
    const { listSkill } = useSelector(state => state.skillSlice);

    const { showNotification } = useContext(NotificationContext);

    // Initialize Formik
    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            phone: "",
            birthday: "",
            gender: true,
            role: "USER",
            skill: [],
            certification: []
        },
        validationSchema: validationSchema,
        onSubmit: values => {
            nguoiDungService.createUser(values)
                .then((res) => {
                    console.log('User created successfully:', res);
                    showNotification('Đăng ký thành công', 'success');
                    // setTimeout(() => {
                    //     window.location.href = '/'
                    // }, 3000);
                })
                .catch((err) => {
                    console.error('Error creating user:', err);
                    showNotification(err.response.data.message || err.response.data.content, 'error');
                });
        }
    });

    useEffect(() => {
        dispatch(getAllSkillApi());
    }, [dispatch]);

    const isReponsive = useResponsive({
        mobile: 576,
        tablet: 768,
    });

    const options = {
        animationData: registerAnimation,
        loop: true
    };

    const { View } = useLottie(options);
    

    return (
        <div className='container mx-auto'>
            <div className={`${isReponsive.mobile ? 'block' : 'flex'} items-center h-screen`}>
                <div className={`${isReponsive.mobile ? 'w-full' : 'w-1/2'}`}>
                    {View}
                </div>
                <div className={`${isReponsive.mobile ? 'w-full' : 'w-1/2 '} max-h-screen`}>
                    <h2 className="font-semibold text-3xl mt-5">Create a new account</h2>
                    <h3 className="text-gray-500 mt-2 mb-5">Already have an account? <Link className="text-blue-500 inline-block hover:underline duration-300" to={path.signin}>Login</Link></h3>
                    <form className="space-y-3" onSubmit={formik.handleSubmit}>
                        <InputCustom lablecontent="Name" name="name" value={formik.values.name} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.name && formik.errors.name ? <div className="text-red-500">{formik.errors.name}</div> : null}

                        <InputCustom lablecontent="Email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.email && formik.errors.email ? <div className="text-red-500">{formik.errors.email}</div> : null}

                        <InputCustom lablecontent="Phone" name="phone" value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.phone && formik.errors.phone ? <div className="text-red-500">{formik.errors.phone}</div> : null}

                        <InputCustom lablecontent="Password" typeInput="password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.touched.password && formik.errors.password ? <div className="text-red-500">{formik.errors.password}</div> : null}

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Gender</label>
                            <select name="gender" value={formik.values.gender} onChange={formik.handleChange} onBlur={formik.handleBlur} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5">
                                <option value={true}>Nam</option>
                                <option value={false}>Nữ</option>
                            </select>
                            {formik.touched.gender && formik.errors.gender ? <div className="text-red-500">{formik.errors.gender}</div> : null}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Birthday</label>
                            <input
                                type="date"
                                name="birthday"
                                value={formik.values.birthday}
                                className="border border-gray-400 rounded-md p-2"
                                onChange={(event) => {
                                    const [year, month, day] = event.target.value.split('-');
                                    const valueDate = `${year}-${month}-${day}`;
                                    formik.setFieldValue('birthday', valueDate);
                                }}
                            />

                            {formik.touched.birthday && formik.errors.birthday ? <div className="text-red-500">{formik.errors.birthday}</div> : null}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Choose your skill</label>
                            <Select
                                mode="multiple"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Choose skill"
                                options={listSkill.map(skill => ({ title: skill.tenSkill, value: skill.tenSkill }))}
                                value={formik.values.skill}
                                onChange={(value) => formik.setFieldValue('skill', value)}
                            />
                            {formik.touched.skill && formik.errors.skill ? <div className="text-red-500">{formik.errors.skill}</div> : null}
                        </div>

                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900">Choose your certification</label>
                            <Select
                                mode="tags"
                                allowClear
                                style={{ width: '100%' }}
                                placeholder="Choose certification"
                                tokenSeparators={[',']}
                                value={formik.values.certification}
                                onChange={(value) => formik.setFieldValue('certification', value)}
                            />
                            {formik.touched.certification && formik.errors.certification ? <div className="text-red-500">{formik.errors.certification}</div> : null}
                        </div>

                        <div>
                            <button type="submit" className="inline-block w-full bg-black text-white py-2 px-5 rounded-md font-bold">Register</button>
                            
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default RegisterPage;
