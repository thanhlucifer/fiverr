import React, { useState, useEffect, useRef } from 'react'
import { Dropdown, Space } from 'antd';
import { Link } from 'react-router-dom'
import { congviecservice } from '../../service/congViec.service';
import useDebounce from '../../hook/useDebounce';

const WrapperSuggestJob = ({ children }) => {
    const [items, setItems] = useState([])
    const [openDropdown, setOpenDropdown] = useState(false)
    const [value, setValue] = useState('')
    const [hoverTimeout, setHoverTimeout] = useState(null)
    const debounceValue = useDebounce(value, 1000)
    const dropdownRef = useRef(null); // Tham chiếu đến dropdown
    const formRef = useRef(null); // Tham chiếu đến form chứa dropdown

    const handleGetValueChildren = (valueChildren) => {
        setValue(valueChildren)
    }
    
    const cloneChildren = React.cloneElement(children, { setOpenDropdown, handleGetValueChildren })

    useEffect(() => {
        if (value) {
            congviecservice.layCongViecTheoTen(value).then((res) => {
                let newItems = res.data.content.slice(0, 4).map((item, index) => {
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

    // Xử lý việc mở và đóng dropdown khi di chuột vào hoặc ra ngoài
    const handleMouseEnter = () => {
        if (hoverTimeout) clearTimeout(hoverTimeout); // Xóa timeout nếu có
        setOpenDropdown(true);
    }

    const handleMouseLeave = () => {
        const timeout = setTimeout(() => {
            setOpenDropdown(false);
        }, 300); // Thay đổi thời gian tùy theo nhu cầu
        setHoverTimeout(timeout);
    }

    return (
        <div
            ref={formRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative"
        >
            <Dropdown
                menu={{ items }}
                open={openDropdown}
                trigger={['click']}
                overlayClassName="absolute top-full left-0 w-full" // Đặt class để điều chỉnh vị trí dropdown nếu cần
                getPopupContainer={() => formRef.current} // Đặt container cho dropdown
                visible={openDropdown}
            >
                {cloneChildren}
            </Dropdown>
        </div>
    )
}

export default WrapperSuggestJob
