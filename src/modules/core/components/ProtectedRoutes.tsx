import { useAuthStore } from '../../auth/store/useAuthStore';
import { Navigate, Outlet } from 'react-router';

export const ProtectedRoutes = () => {
    const { authStatus } = useAuthStore();


    if (authStatus === 'checking') {
        return <h1>Checking...</h1>

    }


    return authStatus === 'authenticated'
        ? <Outlet />
        : <Navigate to='/auth/login' replace />


}