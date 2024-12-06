import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="py-10 bg-indigo-600 flex justiy-between">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="font-bold text-2xl text-indigo-200">
          Veterinary Patient Management {''}
          <span className="text-white font-black">System</span>
        </h1>

        <nav className="flex gap-4">
          <Link
            to="/admin"
            className="text-white text-sm uppercase font-bold"
          >
            Patients
          </Link>

          <Link
            to="/admin"
            className="text-white text-sm uppercase font-bold"
          >
            Profile
          </Link>

          <button
            type="button"
            className="text-white text-sm uppercase font-bold"
          >
            Log out
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
