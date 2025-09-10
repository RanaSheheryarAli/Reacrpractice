import MultipleCondionsB from "./MultipleCondiotionsB";
import Student from "./Student";
import Todos from "./Todos";
import Toggle from "./Toggle";
import Signup from "./signup";
function App() {
{
  // hello i am bashir code
}

  let student={
    name:"Sherry",
    age:22,
    gender:"Male"
  }

  let schools=["National Development Sschool","Govt Public School","Iqra Public School"]
  return (
    <div>  

       {/* <h2>All Schools Available</h2>
       <ul>
         {schools.map((school, index)=>(
        <li key={index}> {school} </li>
      ))}

       </ul>
      <Student student={student} school={schools[0]} />
       <hr />
       <Student student={student} school={schools[1]} /> */}


      <Signup />


    </div>
  );
}

export default App;
