import { Link } from 'react-router-dom';
const Navigation = () => {
  return (
    <nav className="flex justify-between items-center h-[50px] px-5 shadow-md bg-gray-500 text-white">
      <h3 className="font-bold">Github Search</h3>

      <span>
        <Link to="/" className="px-10">
          Home
        </Link>
        <Link to="/fav">Favourites</Link>
      </span>
    </nav>
  );
};

export default Navigation;
