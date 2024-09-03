import React, { Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import UserTemplate from '../template/UserTemplate/UserTemplate';
import PageNotFound from '../components/PageNotFound/PageNotFound';
import { path } from '../common/path';
import LoginPage from '../page/LoginPage/LoginPage';
import RegisterPage from '../page/RegisterPage/RegisterPage';
import CreateUser from '../page/CreateUser/CreateUser';
import AdminTemplate from '../template/AdminTemplate/AdminTemplate';
import { Skeleton } from 'antd';
import DefaultJobListPage from '../page/DefaultJobListPage/DefaultJobListPage';

const ListJobPage = React.lazy(() => import('../page/ListJobPage/ListJobPage'));
const JobDetail = React.lazy(() => import('../page/JobDetail/JobDetail'));
const AdminLoginPage = React.lazy(() => import('../page/AdminLoginPage/AdminLoginPage'));
const ManagerUser = React.lazy(() => import('../page/ManagerUser/ManagerUser'));

const useRoutesCustom = () => {
    const routes = useRoutes([
        {
            path: path.home,
            element: <UserTemplate />,
            children: [
                {
                    path: '',
                    element: <DefaultJobListPage /> 
                },
                {
                    path: path.listjob,
                    element: <Suspense fallback={<Skeleton />}><ListJobPage /></Suspense>
                },
                {
                    path:  path.jobdetail,
                    element: <Suspense fallback={<Skeleton />}><JobDetail /></Suspense>
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
            path: path.signup,
            element: <RegisterPage />
        },
        {
            path: path.admin,
            element: <AdminTemplate />,
            children: [
                {
                    path: 'manager-user',
                    element: <Suspense fallback={<Skeleton />}><ManagerUser /></Suspense>
                },
                {
                    path: 'create-user',
                    element: <CreateUser />
                }
            ]
        },
        {
            path: '/admin-login',
            element: <Suspense fallback={<Skeleton />}><AdminLoginPage /></Suspense>
        }
    ]);
    return routes;
};

export default useRoutesCustom;
