
import './index.css'

function Signup() {




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
                    <input type="text" className="input" />
                </div>
                  <div className="inputlabel">
                    <h4>Email</h4>
                </div>
                <div>
                    <input type="email" className="input" />
                </div>
                  <div className="inputlabel">
                    <h4>Password</h4>
                </div>
                <div>
                    <input type="password" className="input" />
                </div>

                <button>Submit</button>

            </div>

        </div>


    )
}

export default Signup