import React, { useState } from "react";
import "./login.css";
const LoginFrom = ({setUserData}) => {
  //   const [name, setName] = useState("");
  //   const [email, setemail] = useState("");
  //   const [pass, setPass] = useState("");
  //   const [npass, setnpass] = useState("");
  //   const [state, setState] = useState("");

  const [value, setValue] = useState({
    name: "",
    email: "",
    pass: "",
    npass: "",
    state: "",
  });
 const [errtxt, seterrtxt] = useState('')
  const handleInputChange = (e) => {
    setValue({
        ...value,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.name || !value.email || !value.pass || !value.npass) {
        seterrtxt('Some fields are missing')
    } else if (value.name.length < 2) {
        seterrtxt('Name is too small')
    } else if (value.pass !== value.npass) {
        seterrtxt('Passwords do not match')
    } else {
        seterrtxt('')
        setUserData(value);
    }
  };
  return (
    <form>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Name</span>
        </label>
        <input
          className="input"
          required
          onChange={handleInputChange}
          value={value.name}
          name="name"
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Email</span>
        </label>
        <input
          className="input"
          required
          type="email"
          value={value.email}
          onChange={handleInputChange}
          name="email"
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Password</span>
        </label>
        <input
          className="input"
          type="password"
          required
          value={value.pass}
          onChange={handleInputChange}
          name="pass"
        />
      </div>
      <div className="input_group">
        <label className="input_label red_star">
          <span className="label_text">Re-enter your Password</span>
        </label>
        <input
          className="input"
          name="npass"
          type="password"
          required
          value={value.npass}
          onChange={handleInputChange}
        />
      </div>
      <div className="input_group">
        <label className="input_label">
          <span className="label_text">State</span>
        </label>
        <select value={value.state} onChange={handleInputChange} name="state">
          <option value="Assam">Assam</option>
          <option value="New Delhi">New Delhi</option>
          <option value="Goa">Goa</option>
          <option value="Punjab">Punjab</option>
        </select>
      </div>
      <div className='err'>{errtxt}</div>
      <button
        type="submit"
        value="Submit"
        className="button button_wide"
        onClick={handleSubmit}
      >
        Create your account
      </button>
    </form>
  )
}

export default LoginFrom;
