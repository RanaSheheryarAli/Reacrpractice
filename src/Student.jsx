function Student({student , school}){

    return (
        <div>
            <h3>Name: {student.name}</h3>
            <h3>Age: {student.age}</h3>
            <h3>Gender: {student.gender}</h3>
            <h3>School: {school}</h3>

        </div>
    )
    
}
export default Student