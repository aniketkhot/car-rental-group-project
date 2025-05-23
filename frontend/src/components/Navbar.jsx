import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  
  const commonStyle = {
    fontFamily: 'Roboto Slab, serif',
    fontSize: '16px', 
    color: 'white', 
  };

  return (
    <nav className="bg-blue-600 text-white p-4 flex justify-between items-center" style={{ fontFamily: 'Roboto Slab, serif' }}>
      <Link to="/" className="text-2xl font-bold" style={commonStyle}>Your apps name</Link>
      <div>
        {user ? (
          <>

            <Link to="/tasks" className="mr-4" style={commonStyle}>CRUD</Link>
            <Link to="/profile" className="mr-4" style={commonStyle}>Profile</Link>

            <button
              onClick={handleLogout}
              className="bg-red-500 px-4 py-2 rounded hover:bg-red-700"
              style={commonStyle}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login" className="mr-4" style={commonStyle}>Login</Link>
            <Link
              to="/register"
              className="bg-green-500 px-4 py-2 rounded hover:bg-green-700"
              style={commonStyle}
            >
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;