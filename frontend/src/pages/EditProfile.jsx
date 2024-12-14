import { useEffect, useState } from 'react';
import AdminNav from '../components/AdminNav';
import useAuth from '../hooks/useAuth'
import Alert from '../components/Alert';

const EditProfile = () => {
  const { auth, updateProfile, setAuth } = useAuth();
  const [ profile, setProfile ] = useState({});
  const [ alert, setAlert ] = useState({}); 
  
  useEffect(()=>{
    setProfile(auth);
  }, [auth]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const {name, email} = profile;
    const fields = [name, email].map(field => field.trim());

    if (fields.includes('')) {
      setAlert({
        msg: 'Name and Email are necessary',
        error: true
      });
      return;
    }

    setAlert({});

    const result = await updateProfile(profile);
    setAlert(result);
    setAuth(profile);
  }

  return (
    <>
      <AdminNav />

      <h2 className="font-black text-3xl text-center mt-10">Edit your Profile</h2>

      <p className="text-xl mt-5 mb-10 text-center">
        Modify your {''}
        <span className="text-indigo-600 font-bold">Information here</span>
      </p>

      <div className='flex justify-center'>
        <div className="w-full md:w-1/2 bg-white shadow rounded-lg p-5">
          {alert.msg && <Alert alertObj={alert} />}
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Name
              </label>
              <input 
                type='text'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                name='name'
                value={profile.name || ''}
                onChange={(e)=> setProfile({
                  ...profile,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Website
              </label>
              <input 
                type='text'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                name='web'
                value={profile.web || ''}
                onChange={(e)=> setProfile({
                  ...profile,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Phone Number
              </label>
              <input 
                type='text'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                name='phoneNumber'
                value={profile.phoneNumber || ''}
                onChange={(e)=> setProfile({
                  ...profile,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <div className="my-3">
              <label className="uppercase font-bold text-gray-600">
                Email
              </label>
              <input 
                type='text'
                className='border bg-gray-50 w-full p-2 mt-5 rounded-lg'
                value={profile.email || ''}
                name='email'
                onChange={(e)=> setProfile({
                  ...profile,
                  [e.target.name]: e.target.value
                })}
              />
            </div>

            <input 
              type='submit'
              className='bg-indigo-700 px-10 py-3 font-bold text-white roundedn-lg uppercase w-full mt-5'
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
