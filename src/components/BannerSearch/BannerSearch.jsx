import React from 'react'
import FormSearchProduct from '../Form/FormSearchProduct'


const logolink = [
    {
        id: 1,
        img: 'public/meta.ff37dd3.svg'
    },
    {
        id: 2,
        img: 'public/google.e74f4d9.svg'
    },
    {
        id: 2,
        img: 'public/netflix.b310314.svg'
    },
    {
        id: 2,
        img: 'public/payoneer.7c1170d.svg'
    },
    {
        id: 2,
        img: 'public/pg.22fca85.svg'
    },

]
    


const BannerSearch = () => {
    return (
        <div className='container bg-banner rounded-xl'>
            <div className='text-center'>
                <div className='p-10'>
                    <h1 className='text-[56px] font-normal text-white'>Find the right <span className='text-green-500'>freelance</span> <br />service, right away</h1>
                </div>
                <div className='p-10 flex justify-center'>
                    <FormSearchProduct />
                </div>
                <div className='flex justify-center space-x-8 items-center text-white'>
                    <span className='fz-12'>Trusted by:</span>
                    {logolink.map((item) => (
                        <img src={item.img} alt="" width={70} height={14} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BannerSearch