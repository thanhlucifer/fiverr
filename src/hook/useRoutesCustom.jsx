import React from 'react'
import { useRoutes } from 'react-router-dom'
import UserTemplate from '../template/UserTemplate/UserTemplate'
import PageNotFound from '../components/PageNotFound/PageNotFound'
import { path } from '../common/path'
import LoginPage from '../page/LoginPage/LoginPage'

const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.home,
            element: <UserTemplate/>
        },
        {
            path: path.pagenotfound,
            element: <PageNotFound/>
        },
        {
            path:path.signin,
            element: <LoginPage/>
        }
    ])
  return routes
}

export default useRoutesCustom