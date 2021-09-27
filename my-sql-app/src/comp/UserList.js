const UserList = ({ users, title }) => {
  return (
    <div>
      <h2>{title}</h2>
      {users && users.users.map((user) =>
        <div className="user-preview" key={user.intUserID}>
            <h2>{user.strName}</h2>
            <p>email: {user.strEmail}</p>
            <p>password: {user.strPassword}</p>
            <p>date of birth: {user.dtmDOB}</p>
        </div>
      )}
    </div>
  );
}

export default UserList;