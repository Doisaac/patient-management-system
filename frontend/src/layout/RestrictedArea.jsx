import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer.jsx";
import useAuth from '../hooks/useAuth'

const RestrictedArea = () => {
  const { auth, loading } = useAuth();
  
  if (loading) {
    return 'cargando';
  }
  
  return (
    <>
      <Header />
      {auth._id ? (
        <main className="container mt-10 mx-auto">
          <Outlet />
        </main>
      ) : (
        <Navigate to="/" />
      )}
      <Footer />
    </>
  );
}

export default RestrictedArea