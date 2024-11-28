import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return (
    <>
      <main className="container mx-auto md:grid md:grid-cols-2 gap-10 items-center h-full p-3 md:p-0">
        <Outlet />
      </main>
    </>
  );
}

export default AuthLayout