import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { congviecservice } from '../../service/congViec.service';
import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';

const JobDetail = () => {
    const { id } = useParams();
    const [jobDetail, setJobDetail] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const fetchJobDetail = async () => {
            try {
                const res = await congviecservice.getJobDetail(id);
                setJobDetail(res.data.content[0]);
            } catch (err) {
                console.error('Failed to fetch job detail:', err);
            }
        };

        const fetchComments = async () => {
            try {
                const res = await congviecservice.layBinhLuantheoCongViec(id);
                setComments(res.data.content);
            } catch (err) {
                console.error('Failed to fetch comments:', err);
            }
        };

        fetchJobDetail();
        fetchComments();
    }, [id]);

    if (!jobDetail) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Breadcrumbs />
            <div className="job-detail-container container grid grid-cols-12 gap-6">
                <div className="col-span-7">
                    <h1 className="text-2xl font-bold mb-4 text-[#404145]">{jobDetail.congViec.tenCongViec}</h1>
                    <div className="flex items-center mb-4">
                            <img src={jobDetail.avatar} alt="Avatar" className="w-12 h-12 rounded-full mr-4" />
                            <div>
                                <p className="font-bold">{jobDetail.tenNguoiTao}</p>
                                <p><span className='text-yellow-400 space-x-2'><i class="fa-solid fa-star"></i>{jobDetail.congViec?.saoCongViec}</span> <span className='text-gray-400'>({jobDetail.congViec.danhGia})</span></p>
                            </div>
                        </div>
                    <img src={jobDetail.congViec.hinhAnh} alt={jobDetail.congViec.tenCongViec} width={'100%'}/>
                    <p className="mt-4 text-[#62646a]">{jobDetail.congViec.moTa}</p>
                    
                    {/* Bình luận */}
                    <div className="mt-8">
                        <h2 className="text-xl font-bold mb-4">Comments</h2>
                        {comments.length > 0 ? (
                            comments.map(comment => (
                                <div key={comment.id} className="border-b mb-4 pb-4">
                                    <div className="flex items-center mb-2">
                                        <img src={comment.avatar} alt="Avatar" className="w-10 h-10 rounded-full mr-3" />
                                        <div>
                                            <p className="font-semibold">{comment.tenNguoiBinhLuan}</p>
                                            <p className="text-gray-500">{comment.noiDung}</p>
                                        </div>
                                    </div>
                                    <p className="text-gray-500 text-sm">{new Date(comment.ngayBinhLuan).toLocaleDateString()}</p>
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-500">No comments yet.</p>
                        )}
                    </div>
                </div>
                
                <div className="col-span-5">
                    <div className="sticky top-0 p-4 border rounded-lg shadow-lg">
                        <div className='flex justify-between'>
                            <h3 className="text-lg font-bold">{jobDetail.tenNhomChiTietLoai}</h3>
                            <p className="text-lg font-semibold">Price: ${jobDetail.congViec.giaTien}</p>
                        </div>
                        <p className="mt-4 text-[#62646a]">{jobDetail.congViec.moTaNgan}</p><div>
                        <button className="bg-black text-white py-2 px-4 rounded-lg w-full mt-2 hover:bg-black/80">Apply</button>
                        <button className='bg-white border-none text-black py-2 px-4 rounded-lg w-full mt-2 '>
                            Compare with other jobs
                        </button>
                    </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
};

export default JobDetail;
