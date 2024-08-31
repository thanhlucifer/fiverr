import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { path } from '../../common/path'



const FormSearchProduct = ({setItems, setOpenDropdown, handleGetValueChildren}) => {
    const navigate = useNavigate()
    const [valueSearch, setValueSearch] = useState('')
    
    useEffect(() => {
       if (setOpenDropdown && handleGetValueChildren) {
        if (!valueSearch) {
            setOpenDropdown(false)
        }
        handleGetValueChildren(valueSearch)
       }
    }, [valueSearch])
    

    const handleSubmit = (e) => {
        e.preventDefault()
        // B1 thuc hien lay du lieu nguoi dung (valueSearch)
        //B2 su dung useNavigate de chuyen huong nguoi dung toi trang danh sach cong viec
        // B3 dua du lieu nguoi dung da nhap (keyword) vao query params khi chuyen huong
        navigate(`${path.listjob}?tencongviec=${valueSearch}`)
       
    }
    const handleChange = (e) => {
        setValueSearch(e.target.value)
       
        
    }
  return (
   <>
  
    <form onSubmit={handleSubmit}>
        <div className='flex justify-between items-center w-[500px] border rounded-md border-black-700 pl-4 bg-white'>
            <input onChange={handleChange} className='flex-1 focus:outline-none focus:border-none' type="text" placeholder='Nhập tên công việc'/>
            <button className='p-3 text-sm' type='submit'><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </form>
    
   </>
  )
}

export default FormSearchProduct