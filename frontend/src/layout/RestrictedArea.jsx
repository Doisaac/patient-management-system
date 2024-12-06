import { Outlet } from "react-router-dom"

const RestrictedArea = () => {
  return (
    <>
    <h1 className="font-bold text-2xl p-2 bg-green-400">This is a restricted area</h1>
    
    <Outlet />
    </>
  )
}

export default RestrictedArea