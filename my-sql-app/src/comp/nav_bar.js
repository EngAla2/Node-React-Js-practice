import { Link } from 'react-router-dom';
const NavBar = () => {
  return (
    <nav className="navbar">
      <h1>Hello to MySQL App!</h1>
      <div className="links">
        <Link to="/users">all users</Link>
        <Link to="/create" style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
        }}>New User</Link>
      </div>
    </nav>
  );
}

export default NavBar;