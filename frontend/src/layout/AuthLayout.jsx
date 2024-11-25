import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <h1>Patient Management System</h1>
      
      <Outlet />
    </>
  )
}

export default AuthLayout