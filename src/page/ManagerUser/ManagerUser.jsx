import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValueUserApi } from '../../redux/nguoiDungSlide';
import { Tag, Table, Space } from 'antd';

const ManagerUser = () => {
    const dispath = useDispatch();
    const { listNguoiDung } = useSelector(state => state.nguoiDungSlide)
    useEffect(() => {
        dispath(getValueUserApi())
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
        },
        {
            title: 'Avatar',
            dataIndex: 'avatar',
            key: 'avatar',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Role',
            dataIndex: 'role',
            key: 'role',
            render: (text) =>  <Tag color={text == 'USER' ? 'cyan-inverse' : 'red-inverse'}>{text}</Tag>
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <button className="btn bg-red-500 rounded-md py-2 px-2 text-white" >Delete</button>
                    <button className="btn bg-yellow-400 rounded-md py-2 px-2" >Edit</button>
                </Space>
            ),
        },
    ];

    return (
        <div>
             <Table columns={columns}  dataSource={listNguoiDung}/>
        </div>
    )
}

export default ManagerUser