import React from "react";
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="home">
      <div  className="nice-links">
        <Link to="/create" style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
        }}>Create New User</Link>
      </div> 
      < div  className="nice-links"> 
        <Link to="/users" style={{
          color: 'white',
          borderRadius: '8px',
          backgroundColor: '#f1356d',
        }}>Show Users</Link>    
    </div>
    </div>
  );
}

export default Home;