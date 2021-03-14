import React from "react";
import "./style.css";
import axios from 'axios'

export default function App() {
  let [a, seta] = React.useState([])
  React.useEffect(function () {
    axios.get("https://jsonplaceholder.typicode.com/users")
    .then(res=>seta(res.data))
   },[])
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <h1>all users {a.length}</h1>

    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>email</th>
        </tr>
      </thead>
      <tbody>
          {a.map(item =>
         <tr>
              <td>{ item.id}</td>
              <td>{ item.name}</td>
              <td>{ item.email}</td>
        </tr>
      )}
      </tbody>
    </table>

    </div>
  );
}
