import React, { useState } from 'react';
import useFetch from './useFetch';
import UserList from './UserList';


const Users = () => {
  const [gotReq, setGottReq] = useState(false)
  const { data, isPending, error } = useFetch('http://localhost:4000/')

  return (
    <div className="home">
      {data && <UserList users={data.user} title="All Users!" />}
    </div>
  );
}

export default Users;