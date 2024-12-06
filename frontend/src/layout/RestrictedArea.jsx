import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/footer";
import useAuth from '../hooks/useAuth'

const RestrictedArea = () => {
  const { auth, loading } = useAuth();

  if (loading) {
    return 'cargando';
  }
  
  return (
    <>
    <Header />
    {auth._id ? <Outlet/> : <Navigate to="/" /> }
    <Footer />
  </>
  )
}

export default RestrictedArea