import {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

function App() {
  const [users, setUsers] = useState("Sam");
  function updateData(){
    return(
      setUsers("Smith")
    )
  }
  return (
    <div className="App">
      <header className="App-header">
      <h1>{users}</h1>
      <button onClick={updateData}>Update User</button>
      <User />
      </header>
    </div>
  );
}

export default App;
