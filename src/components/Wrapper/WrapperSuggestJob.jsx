import React, { useState, useEffect } from 'react'
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom'
import { congviecservice } from '../../service/congViec.service';
import useDebounce from '../../hook/useDebounce';
const WrapperSuggestJob = ({ children }) => {
    const [items, setItems] = useState([])
    const [openDropdown, setOpenDropdown] = useState(false)
    const [value, setValue] = useState('')
    const debounceValue = useDebounce(value, 1000)
    const handleGetValueChildren = (valueChildren) => {
        setValue(valueChildren)
     }
    const cloneChildren = React.cloneElement(children, { setOpenDropdown, handleGetValueChildren})
    
    useEffect(() => {
        if (value) {
         congviecservice.layCongViecTheoTen(value).then((res) => {
             console.log(res)
             let newItems = res.data.content.slice(0, 4).map((item,index) => {
                 return {
                     key: index.toString(),
                     label: <Link className='flex items-center space-x-4'>
                         <img src={item.congViec?.hinhAnh} className='h-24' alt="" />
                         <div>
                             <h4>{item.congViec?.tenCongViec}</h4>
                             <p>{item.congViec?.giaTien}</p>
                         </div>
                     </Link>
                 }
             })
             setItems(newItems)
             setOpenDropdown(true)
             
         }).catch((err) => {
             console.log(err)
             setOpenDropdown(false)
         })
        }
     }, [debounceValue])

     
    return (
        <Dropdown
            menu={{
                items,
            }}
            open={openDropdown}
        >
            {cloneChildren}
        </Dropdown>
    )
}

export default WrapperSuggestJob