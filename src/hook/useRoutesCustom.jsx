import React from 'react'
import { useRoutes } from 'react-router-dom'
import UserTemplate from '../template/UserTemplate/UserTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import { path } from '../common/path'
import LoginPage from '../page/LoginPage/LoginPage'
import ListJobPage from '../page/ListJobPage/ListJobPage'
import AdminTemplate from '../template/AdminTemplate/AdminTemplate'
import AdminLoginPage from '../page/AdminLoginPage/AdminLoginPage'
import ManagerUser from '../page/ManagerUser/ManagerUser'


const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.home,
            element: <UserTemplate />,
            children: [
                {
                    path: path.listjob,
                    element: <ListJobPage />
                }
            ]
        },
        {
            path: path.pagenotfound,
            element: <PageNotFound />
        },
        {
            path: path.signin,
            element: <LoginPage />
        },
        {
            path: path.admin,
            element: <AdminTemplate />,
            children: [
                {
                    path: 'manager-user',
                    element: <ManagerUser />
                }
            ]
        },
        {
            path: '/admin-login',
            element: <AdminLoginPage />
           
            
        }
    ])
    return routes
}

export default useRoutesCustom