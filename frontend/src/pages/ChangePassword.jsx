import { useState } from "react" 
import AdminNav from "../components/AdminNav"
import Alert from "../components/Alert"
import useAuth from "../hooks/useAuth"

const ChangePassword = () => {
  const [alert, setAlert] = useState({});
  const [password, setPassword] = useState({
    'current_pwd': '',
    'password': ''
  });
  const { savePassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (Object.values(password).some(field => field === '')){
      setAlert({
        msg: 'Please complete all the fields',
        error: true
      })

      return;
    }

    if (password.password.length < 6) {
      setAlert({
        msg: 'The new password is too short',
        error: true
      })

      return;
    }
    
    const response = await savePassword(password);
    // const response = await updatePassword(password);
    console.log(response);
  }

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">
        Change Password
      </h2>
      
      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {''} 
        <span className="text-indigo-600 font-bold">Password here</span>
      </p>

      <div className='flex justify-center'>
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {alert.msg && <Alert alertObj={alert} />}

          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Password
              </label>
              <input 
                type='password'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                name='current_pwd'
                placeholder='Your current password'
                onChange={e => setPassword({
                  ...password,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                New Password
              </label>
              <input 
                type='password'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                name='password'
                placeholder='Your new password'
                onChange={e => setPassword({
                  ...password,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <input 
              type='submit'
              className='bg-indigo-700 px-10 py-3 font-bold text-white roundedn-lg uppercase w-full mt-5'
              value='Update Password'
            />
          </form>
        </div>
      </div>
    </>
  )
}

export default ChangePassword