import {useState}  from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';

let myText = 'Web'
function App() {
  return (
  <div>
    <h1 style={{backgroundColor:"#ff1284"}}>Hello {myText} World</h1>
    <p>Thi is a tutorial  for React.</p>
    <label htmlFor='name'>Name: </label>
    <input maxLength={5} autoFocus={true} placeholder='Name'></input>
    <User firstName= "Sam" age= "30" class="B"></User>
    <User firstName= "Smith" age= "25" class="C"/>
    <User firstName= "Swan" age= "20" class="A"/>
  </div>
  
  );
}

export default App;
