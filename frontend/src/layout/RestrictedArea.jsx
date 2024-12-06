import { Outlet, Navigate } from "react-router-dom"
import useAuth from '../hooks/useAuth'

const RestrictedArea = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return 'cargando';
  }
  
  return (
    <>
    <h1 className="font-bold text-2xl p-2 bg-green-400">This is a restricted area</h1>

    {auth._id ? <Outlet/> : <Navigate to="/" /> }
  </>
  )
}

export default RestrictedArea