import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import { congviecservice } from '../../service/congViec.service'

const ListJobPage = () => {
    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('tencongviec'))
    useEffect(() => {
        congviecservice.layCongViecTheoTen(searchParams.get('tencongviec')).then((res) => {
            console.log(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [searchParams.get('tencongviec')])
    return (
        <div>ListJobPage</div>
    )
}

export default ListJobPage