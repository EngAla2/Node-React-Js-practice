import { TextField } from '@material-ui/core';
import { useState } from "react";
import { Link } from "react-router-dom";

const CreateUser = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [dateOfBirth, setDateOfBirth] = useState()
  const [isActive, sertIsActive] = useState(true)
  const [sentReq, setSentReq] = useState()
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password, dateOfBirth, isActive }
    const res = fetch('http://localhost:4000/create', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user)
    }).then((response) => {
      if (response.ok)
        return response.json()
    }).then((data) => {
      setSentReq(data.message);
    })
  }
  return (
    <div className="create">
      <h2>Add a new User to the DB</h2>
      {!sentReq ? <>
        <form onSubmit={handleSubmit}>
          <label>User name:</label>
          <input
            type="text"
            required
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>User email:</label>
          <input
            type="text"
            className="input"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          >
          </input>
          <label>User password:</label>
          <input
            className="input"
            type="text"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          >
          </input>
          <label>User date of birth:</label>
          <TextField
            id="date"
            // label="Birthday"
            type="date"
            required
            className="date"
            onChange={e => setDateOfBirth(e.target.value.toString())}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <button className="button">Add User</button>
        </form>
      </> :
        <>
          <h3>{sentReq}</h3>
          <br />
          <h5>strName: {name}</h5>
          <h5>dtmDOB: {dateOfBirth}</h5>
          <h5>strEmail: {email}</h5>
          <h5>strPassword: {password}</h5>
          <br />
          < div className="nice-links">
            <Link to="/" style={{
              color: 'white',
              borderRadius: '8px',
              backgroundColor: '#f1356d',
            }}>Go Back Home</Link>
          </div>
        </>
      }
    </div>
  );
}


export default CreateUser;