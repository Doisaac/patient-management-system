import { useState } from 'react'
import { Link } from 'react-router-dom';

const Register = () => {
  // Hooks - State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPasswod, setConfirmPassword] = useState('');


  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-pretty">
          Sign Up and Start Managing Your {''}
          <span className="text-black">Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Name:
            </label>

            <input
              type="text"
              placeholder="Your name"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Email:
            </label>

            <input
              type="email"
              placeholder="Registration email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Password:
            </label>

            <input
              type="password"
              placeholder="Your password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Confirm Password:
            </label>

            <input
              type="password"
              placeholder="Repeat your password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
              value={confirmPasswod}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 cursor-pointer hover:bg-indigo-900 transition-colors ease-in-out duration-700 md:w-auto px-12"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link
            className="block text-center my-5 text-gray-500"
            to="/"
          >
            Have an account? Log in
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Register;
