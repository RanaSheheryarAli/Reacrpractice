function Loops() {
  const userdata = [
    {
      id: "1",
      name: "Sherry",
      age: "22",
      school: "Comsats",
    },
    {
      id: "2",
      name: "Mohsin",
      age: "23",
      school: "NDS",
    },
    {
      id: "3",
      name: "Moiz",
      age: "24",
      school: "NDS",
    },
    {
      id: "4",
      name: "Haseeb",
      age: "22",
      school: "NDS",
    },
  ];

  return (
    <div>
      <h1> Loops with Map Function</h1>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>School</td>
          </tr>
        </thead>
        <tbody>
          {userdata.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.age}</td>
              <td>{user.school}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>with out loop </h1>

      <table border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Age</td>
            <td>School</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Sherry</td>
            <td>22</td>
            <td>NDS</td>
          </tr>
          <tr>
            <td>Sherry</td>
            <td>22</td>
            <td>NDS</td>
          </tr>
          <tr>
            <td>Sherry</td>
            <td>22</td>
            <td>NDS</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Loops;
