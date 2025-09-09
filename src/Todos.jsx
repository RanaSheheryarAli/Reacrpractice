import reactlogo from './assets/react.svg'

 

function ToDos({newtask}){
function on(){
   

    alert("Thanks for watching in ")

}

    return (
        <div>
            <h1>
                {
                    newtask
                }
            </h1>
        <img style={{marginTop:"10px"}} src={reactlogo} alt="not found" />
        <h1 style={{display:"inline", marginLeft:"20px"}}>Sherry Todos List</h1>
        <ul>
            <li>Watch react full vodeo</li>
            <li>After watching video then practice it on vs code</li>
            <li>Then make real project </li>
            <li>Then crack the interview</li>
        </ul>

<button onClick={on}>Click me</button>


        </div>
    )
}

export default ToDos