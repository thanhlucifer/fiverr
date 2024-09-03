import React, { useEffect, useState } from 'react';
import { congviecservice } from '../../service/congViec.service';
import { useNavigate } from 'react-router-dom';

const DefaultJobListPage = () => {
    const [ListJob, setListJob] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        congviecservice.jobDefault()
            .then((res) => {
                setListJob(res.data.content);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const handleJobClick = (id) => {
        navigate(`/job-detail/${id}`);
    };

    return (
        <div className='container'>
            <h1 className='text-center font-bold'>Danh sách công việc mặc định</h1>
            <div className='grid grid-cols-4 gap-10 mt-10'>
                {ListJob.map((item, index) => (
                    <div key={index} className='space-y-4 border rounded-md p-3 cursor-pointer' onClick={() => handleJobClick(item.id)}>
                        <img src={item.hinhAnh} alt="" className='w-full'/>
                        <div>
                            <h3>{item?.tenCongViec}</h3>
                            <p>
                                <span className='text-yellow-400 space-x-2'>
                                    <i className="fa-solid fa-star"></i>{item?.saoCongViec}
                                </span> 
                                <span className='text-gray-400'>({item.danhGia})</span>
                            </p>
                        </div>
                        <div className='flex justify-between items-center'>
                            <i className="fa-solid fa-heart"></i>
                            <p className='font-bold uppercase'>Starting at <span>${item?.giaTien}</span></p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DefaultJobListPage;
