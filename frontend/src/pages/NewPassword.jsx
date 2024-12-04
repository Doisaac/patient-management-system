import { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import Alert from '../components/Alert';
import axiosClient from '../config/axios';

const NewPassword = () => {
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState({});
  const { token } = useParams();
  const [validToken, setValidToken] = useState(false);
  const [modifiedPassword, setModifiedPassword] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      try {
        await axiosClient(`/veterinarians/forgetpassword/${token}`);
        setAlert({ msg: 'Type your new password', error: false });

        setValidToken(true);
      } catch (error) {
        setAlert({ msg: 'There was an error with the URL', error: true });
      }
    };
    checkToken();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password === '') {
      setAlert({ msg: 'Please complete the field', error: true });
      return;
    } else if (password.length < 6) {
      setAlert({
        msg: 'Password is too short, add at least 6 characters',
        error: true,
      });
      return;
    }

    try {
      const URL = `/veterinarians/forgetpassword/${token}`;

      const { data } = await axiosClient.post(URL, { password });
      setModifiedPassword(true);
      setAlert({ msg: data.msg, error: false });
    } catch (error) {
      setAlert({
        msg: error.response.data.msg,
        error: true,
      });
    }
  };

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-pretty">
          Restore Your Access and Your {''}
          <span className="text-black">Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {alert.msg && <Alert alertObj={alert} />}

        {validToken && (
          <>
            <form onSubmit={handleSubmit}>
              <div className="my-5">
                <label className="uppercase text-gray-500 block text-xl font-bold">
                  New Password
                </label>

                <input
                  type="password"
                  placeholder="Your new password"
                  className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <input
                type="submit"
                value="Save New Password"
                className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 cursor-pointer hover:bg-indigo-900 transition-colors ease-in-out duration-700 md:w-auto px-12"
              />
            </form>

            <nav className="mt-10 lg:flex lg:justify-between">
              {modifiedPassword && (
                <Link
                  className="block text-center my-5 text-gray-500"
                  to="/"
                >
                  Log in
                </Link>
              )}
            </nav>
          </>
        )}
      </div>
    </>
  );
};

export default NewPassword;
