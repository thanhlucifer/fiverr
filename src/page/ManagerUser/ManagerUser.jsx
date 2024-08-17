import React, { useContext, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getValueUserApi } from '../../redux/nguoiDungSlide';
import { Tag, Table, Space } from 'antd';
import { nguoiDungService } from '../../service/nguoiDung.service';
import { NotificationContext } from '../../App';

const ManagerUser = () => {
    const { showNotification } = useContext(NotificationContext)
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
            render: (text) => <img src={text} className='h-10'/>
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
                    <button onClick={() => {
                        nguoiDungService.deleteUser(record.id).then((res) => {
                            console.log(res)
                            dispath(getValueUserApi())
                            showNotification(res.data.message, 'success')
                        }).catch((err) => {
                            console.log(err)
                            showNotification(err.response.data.message || err.response.data.content, 'error')
                        })
                    }} className="btn bg-red-500 rounded-md py-2 px-2 text-white" >Delete</button>
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