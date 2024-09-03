import React, { useEffect, useState } from 'react'
import { useSearchParams, useNavigate } from 'react-router-dom'
import { congviecservice } from '../../service/congViec.service'

const ListJobPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    const [ListJob, setListJob] = useState([])
    console.log(searchParams.get('tencongviec'))
    const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng
    useEffect(() => {
        congviecservice.layCongViecTheoTen(searchParams.get('tencongviec')).then((res) => {
            console.log(res)
            setListJob(res.data.content)
        }).catch((err) => {
            console.log(err)
        })
    }, [searchParams.get('tencongviec')])

     // Hàm điều hướng tới trang chi tiết công việc
    const handleJobClick = (id) => {
    navigate(`/job-detail/${id}`);
};
    return (
        <div className='container'>
            <h1 className='text-center font-bold'>Danh sách công việc dựa trên từ khóa: {searchParams.get('tencongviec') ? searchParams.get('tencongviec') : ''}</h1>
            <div className='grid grid-cols-4 gap-10 mt-10'>
                {ListJob.map((item, index) => {
                    return <div key={index} className='space-y-4 border rounded-md p-3 cursor-pointer'   onClick={() => handleJobClick(item.congViec.id)} >
                        <img src={item.congViec.hinhAnh }alt="" className='w-full'/>
                        {/* <h3>{congviec.tenCongViec}</h3> */}
                        <div className='flex items-center space-x-4'>
                            <img src={item.avatar} alt="" className='w-10 h-10 rounded-full' />
                            <h4 className='font-bold text-lg'>{item.tenNguoiTao}</h4>
                        </div>
                        <div>
                            <h3>{item.congViec?.tenCongViec}</h3>
                            <p><span className='text-yellow-400 space-x-2'><i class="fa-solid fa-star"></i>{item.congViec?.saoCongViec}</span> <span className='text-gray-400'>({item.congViec.danhGia})</span></p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <i class="fa-solid fa-heart"></i>
                            <p className='font-bold uppercase'>Starting at  <span>${item.congViec?.giaTien}</span></p>
                        </div>

                    </div>

                })}


            </div>
        </div>
    )
}

export default ListJobPage