import React from 'react'


const items = [
    {
        key: '1',
        label: 'Programming & Tech',
        img: '/images/categories/programming-tech.49dbf0d.svg',
    },
    {
        key: '2',
        label: 'Graphics & Design',
        img: '/images/categories/graphics-design.3272c08.svg',
    },
    {
        key: '3',
        label: 'Digital Marketing',
        img: '/images/categories/digital-marketing.85e8846.svg',
    },
    {
        key: '4',
        label: 'Writing & Translation',
        img: '/images/categories/writing-translation.dc66eb8.svg',
    },
    {
        key: '5',
        label: 'Video & Animation',
        img: '/images/categories/video-animation.21fb1d6.svg',
    },
    {
        key: '6',
        label: 'AI Services',
        img: '/images/categories/ai-services.40511da.svg',
    },
    {
        key: '7',
        label: 'Music & Audio',
        img: '/images/categories/music-audio.6a411f2.svg',
    },
    {
        key: '8',
        label: 'Business',
        img: '/images/categories/business.772c3c9.svg',
    },
    {
        key: '9',
        label: 'Consulting',
        img: '/images/categories/consulting.93989a4.svg',
    }

]
const CategoriesSection = () => {
  return (
    <div className='container m-10'>
        <div className='grid grid-cols-9 gap-10'>
            {items.map((item) => (
                <div key={item.key} className='space-y-4 border p-[8px] rounded-[16px] shadow-md w-[120px]  hover:bg-[#1dbf73]/30  cursor-pointer transition-all' >
                    <img src={item.img} alt="" width={24} height={24} className='pt-1'/>
                    <h3 className='font-bold text-[14px] h-[48px] text-left'>{item.label}</h3>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CategoriesSection