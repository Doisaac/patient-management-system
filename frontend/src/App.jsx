import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './pages/Login'
import Register from './pages/Register'
import ForgetPassword from './pages/ForgetPassword'
import ConfirmAccount from './pages/ConfirmAccount'
import NewPassword from './pages/NewPassword'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout/>}>
          <Route index element={<Login/>}/>
          <Route path="register" element={<Register/>}/>
          <Route path="forget-password" element={<ForgetPassword/>}/>
          <Route path="forget-password/:token" element={<NewPassword/>}/>
          <Route path="confirm/:token" element={<ConfirmAccount/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App