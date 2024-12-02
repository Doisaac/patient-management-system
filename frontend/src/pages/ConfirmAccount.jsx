import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Alert from '../components/Alert.jsx';
import axios from 'axios';

const ConfirmAccount = () => {
  const [confirmedAccount, setConfirmedAccount] = useState(false);
  const [loading, setLoading] = useState(true);
  const [alert, setAlert] = useState({});

  const { token } = useParams();

  useEffect(() => {
    const confirmAccount = async () => {
      try {
        const { data } = await axios(
          `http://localhost:4000/api/veterinarians/confirm/${token}`
        );
        setConfirmedAccount(true);
        setAlert({ msg: data.msg, error: false });
      } catch (error) {
        console.log('errorrrrr entrooooooo');
        console.log(error);
        setAlert({ msg: error.response.data.msg, error: true });
      }
      setLoading(false);
    };
    confirmAccount();
  }, []);

  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-pretty">
          Confirm your Account and Start Managing {''}
          <span className="text-black"> your Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        {!loading && <Alert alertObj={alert} />}
        {confirmedAccount && 
          <Link
            className="block text-center my-5 text-gray-500"
            to="/"
          >
            Log in
          </Link>
        }
      </div>
    </>
  );
};

export default ConfirmAccount;
