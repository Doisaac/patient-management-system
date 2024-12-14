import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/AuthProvider.jsx'
import { PatientsProvider } from './context/PatientsProvider.jsx'
import AuthLayout from './layout/AuthLayout'
import RestrictedArea from './layout/RestrictedArea.jsx'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import NewPassword from './pages/NewPassword'
import Admin from './pages/Admin.jsx'
import EditProfile from './pages/EditProfile.jsx'
import ChangePassword from './pages/ChangePassword.jsx'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PatientsProvider>
          <Routes>
            <Route path="/" element={<AuthLayout/>}>
              <Route index element={<Login/>}/>
              <Route path="register" element={<Register/>}/>
              <Route path="forget-password" element={<ForgetPassword/>}/>
              <Route path="forget-password/:token" element={<NewPassword/>}/>
              <Route path="confirm/:token" element={<ConfirmAccount/>}/>
            </Route>

            <Route path="/admin" element={<RestrictedArea />}>
              <Route index element={<Admin/>}/>
              <Route path="profile" element={<EditProfile />} />
              <Route path="change-password" element={<ChangePassword />} />
            </Route>
          </Routes>
        </PatientsProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App