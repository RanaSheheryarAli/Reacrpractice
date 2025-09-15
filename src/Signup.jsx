
import { useState } from 'react'
import './index.css'

function Signup() {
    const [name, setname]=useState()
    const [email, setemail]=useState()
    const [pass, setpass]=useState()
    const [skills, setskills]=useState([])

    const handler=(event)=>{
         console.log(event.target.value, event.target.checked)
        if (event.target.checked){

            setskills([...skills, event.target.value])
        }
        else{
            setskills([...skills.filter((item)=>item!=event.target.value)])
        }
    }
    return (
        <div>
            <div className='heading-center'>
                <h1>
                    Signup 
                </h1>
            </div>
            <div className='form-center'>

                <div className="inputlabel">
                    <h4>Name</h4>
                </div>
                <div>
                    <input type="text" onChange={(event)=>setname(event.target.value)} value={name} className="input" placeholder='Enter Name'/>
                  <h6>{name}</h6>
                </div>
                  <div className="inputlabel">
                    <h4>Select skills</h4>
                </div>
                <div>
                    <input type="checkbox" onChange ={handler} id='html' value="html" />
                    <label htmlFor="html">HTML</label>

                    <input type="checkbox" onChange ={handler} id='css' value="css" />
                    <label htmlFor="css">CSS</label>

                    <input type="checkbox" onChange ={handler} id='js' value="js" />
                    <label htmlFor="js">JS</label>

                    <h3>{skills},</h3>
                  <h6>{name}</h6>
                </div>
                  <div className="inputlabel">
                    <h4>Email</h4>
                </div>
                <div>
                    <input type="text" onChange={(event)=>setemail(event.target.value)} value={email} className="input" placeholder='Enter Email'/>
                  <h6>{email}</h6>
                </div>
                  <div className="inputlabel">
                    <h4>Password</h4>
                </div>
                <div>
                   <input type="password" onChange={(event)=>setpass(event.target.value)} value={pass} className="input" placeholder='Enter password'/>
                  <h6>{pass}</h6>
                </div>
                <button>Submit</button>
                <button onClick={()=>{setname("") ; setemail(""); setpass("")}}>Clear</button>
            </div>

        </div>


    )
}





export default Signup