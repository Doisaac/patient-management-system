import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './context/authProvider.jsx'
import AuthLayout from './layout/AuthLayout'
import RestrictedArea from './layout/RestrictedArea.jsx'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import NewPassword from './pages/NewPassword'
import Admin from './pages/admin.jsx'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
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
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App