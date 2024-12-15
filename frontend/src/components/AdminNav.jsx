import { Link } from "react-router-dom"

const AdminNav = () => {
  return (
    <nav className="flex gap-3 justify-center">
      <Link
        to="/admin/profile"
        className='font-bold uppercase text-gray-500 hover:text-indigo-600 transition-colors'
      >
        Profile
      </Link>

      <Link
        to="/admin/change-password"
        className='font-bold uppercase text-gray-500 hover:text-indigo-600 transition-colors'
      >
        Change Password
      </Link>
    </nav>
  )
}

export default AdminNav