import { Outlet, Navigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/footer";
import useAuth from '../hooks/useAuth'

const RestrictedArea = () => {
  const { auth, loading } = useAuth();
  console.log('restricted area component');
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