import { useState } from "react"

function Display() {
    const [dispaly, setdispaly] = useState(true)

    return (
        <div>

            <button onClick={() => { setdispaly(!dispaly) }} >Show/Hide</button>

            {
                dispaly ? <h1>Sherry</h1> :null
            }

        </div>
    )
}
export default Display