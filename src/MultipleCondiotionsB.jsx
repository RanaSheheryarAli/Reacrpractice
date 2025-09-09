import { useState } from "react";

function MultipleCondionsB(){
    const [count , setcount]= useState(0)

    return(
        <div>
            <h1>Multiple conditions {count}</h1>
            <button onClick={ ()=>{
                setcount(count +1)
            }} >click me</button>
            {
                count==0? <h1>count 0</h1>
                :count==1? <h1>count 1</h1>
                :count==2? <h1>count 2</h1>
                : <h1>unknown</h1>
            }
        </div>
    )
}
export default MultipleCondionsB