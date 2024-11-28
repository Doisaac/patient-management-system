import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <>
      <div>
        <h1 className="text-indigo-600 font-black text-6xl text-pretty">
          Log in and Manage your
          <span className="text-black"> Patients</span>
        </h1>
      </div>

      <div className="mt-20 md:mt-5 shadow-lg px-5 py-10 rounded-xl bg-white">
        <form action="">
          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Email:
            </label>

            <input
              type="email"
              placeholder="Registration email"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <div className="my-5">
            <label className="uppercase text-gray-500 block text-xl font-bold">
              Password:
            </label>

            <input
              type="password"
              placeholder="Password"
              className="border w-full p-3 mt-3 bg-gray-50 rounded-xl"
            />
          </div>

          <input
            type="submit"
            value="Login"
            className="bg-indigo-700 w-full py-3 rounded-xl text-white uppercase font-bold mt-5 cursor-pointer hover:bg-indigo-900 transition-colors ease-in-out duration-700 md:w-auto px-12"
          />
        </form>

        <nav className="mt-10 lg:flex lg:justify-between">
          <Link className="block text-center my-5 text-gray-500" to="/register">
            Don't you have an account yet? Sign up
          </Link>

          <Link
            className="block text-center my-5 text-gray-500"
            to="/forget-password"
          >
            Forgot your password? Reset it here
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Login