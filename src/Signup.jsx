import { useState } from "react";
import "./index.css";

function Signup() {
  const [name, setname] = useState();
  const [email, setemail] = useState();
  const [pass, setpass] = useState();
  const [skills, setskills] = useState([]);
  const [gender, setgender] = useState("");
  const [city, setcity]=useState("");

  const checkbox_handler = (event) => {
    console.log(event.target.value, event.target.checked);
    if (event.target.checked) {
      setskills([...skills, event.target.value]);
    } else {
      setskills([...skills.filter((item) => item != event.target.value)]);
    }
  };

  return (
    <div>
      <div className="heading-center">
        <h1>Signup</h1>
      </div>
      <div className="form-center">
        <div className="inputlabel">
          <h4>Name</h4>
        </div>
        <div>
          <input
            type="text"
            onChange={(event) => setname(event.target.value)}
            value={name}
            className="input"
            placeholder="Enter Name"
          />
          <h6>{name}</h6>
        </div>
        <div className="inputlabel">
          <h4>skills</h4>
        </div>
        <div className="input">
          <input
            type="checkbox"
            onChange={checkbox_handler}
            id="html"
            value="html"
          />
          <label htmlFor="html">HTML</label>

          <input
            type="checkbox"
            onChange={checkbox_handler}
            id="css"
            value="css"
          />
          <label htmlFor="css">CSS</label>

          <input
            type="checkbox"
            onChange={checkbox_handler}
            id="js"
            value="js"
          />
          <label htmlFor="js">JS</label>
        </div>
        <h3>{skills}</h3>
        <div>
          <div className="inputlabel">
            <h4>Gander</h4>
          </div>
          <div className="input">
            <input
              type="radio"
              checked={gender == "Male"}
              onChange={(event) => setgender(event.target.value)}
              value={"Male"}
              name="gender"
              id="male"
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              checked={gender == "Female"}
              onChange={(event) => setgender(event.target.value)}
              value={"Female"}
              name="gender"
              id="female"
            />
            <label htmlFor="female">Female</label>
          </div>
          <h3>{gender}</h3>
        </div>

<div className="inputlabel">
  <h4>City</h4>
</div>
<div>
  <select defaultValue={city}  onChange={(event)=>setcity(event.target.value)} className="input" style={{width:"400px", height:"35px"}} name="city" id="city">
    <option value={""}>Select</option>
    <option  value="Arifwala">Arifwala</option>
    <option value="Sahiwal">Sahiwal</option>
    <option value="Pakpattan">Pakpattan</option>
    <option value="Lahore">Lahore</option>

  </select>
</div>
<h3>{city}</h3>
        <div className="inputlabel">
          <h4>Email</h4>
        </div>

        <div>
          <input
            type="text"
            onChange={(event) => setemail(event.target.value)}
            value={email}
            className="input"
            placeholder="Enter Email"
          />
          <h6>{email}</h6>
        </div>
        <div className="inputlabel">
          <h4>Password</h4>
        </div>
        <div>
          <input
            type="password"
            onChange={(event) => setpass(event.target.value)}
            value={pass}
            className="input"
            placeholder="Enter password"
          />
          <h6>{pass}</h6>
        </div>
        <button>Submit</button>
        <button
          onClick={() => {
            setname("");
            setemail("");
            setpass("");
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default Signup;
