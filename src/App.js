import {useState}  from 'react';
import logo from './logo.svg';

import './App.css';
import User from './User';
import ImageComponent from './ImageComponent';

let myText = 'Web'
function App() {
  // function showAlert(){
  //   alert("Welcome to project")
  // }
  // function please(){
  //   alert("please help!")
  // }
  // const response = (myText) => alert(myText);

  // const onTextChange = (event) =>{
  //   console.log(event.target.value)
  // }


// console.log(useState(0))
const [counter, setCounter] = useState(0);
  const increment = ()=>{setCounter(counter+1)};
  // console.log(counter)
  return (
  <div className='App'>
    {/* <h1 style={{backgroundColor:"#ff1284"}}>Hello {myText} World</h1>
    <p>Thi is a tutorial  for React.</p>
    <label htmlFor='name'>Name: </label>
    <input maxLength={5} autoFocus={true} placeholder='Name'></input>
    <User firstName= "Sam" age= "30" class="B"></User>
    <User firstName= "Smith" age= "25" class="C"/>
    <User firstName= "Swan" age= "20" class="A"/>  */
    /* <button onClick={()=>{showAlert()}}>Click Me</button>
    <button onClick={please}>Please</button>
    <button onClick={()=>{alert("Thanks for subscribe")}}>Thanks</button>
    <button onClick={()=>{response("Response Submitted")}}>Response</button> */}

    {/* <input onChange={onTextChange} /> */}
    <div style={{fontSize:"26px", fontWeight: 'bold',color: "red"}}>{counter}</div>
    <button onClick={increment}>Increment</button>
    <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixlr.com%2Fimages%2Findex%2Fai-image-generator-one.webp&tbnid=ITvWGUbYNP6EBM&vet=12ahUKEwj95YaUiJ2FAxU2N2IAHVJpBLMQMygGegUIARCBAQ..i&imgrefurl=https%3A%2F%2Fpixlr.com%2F&docid=5o-TWu8oxtNdLM&w=435&h=600&q=images&ved=2ahUKEwj95YaUiJ2FAxU2N2IAHVJpBLMQMygGegUIARCBAQ" alt="" width={500}></img>
  
    <ImageComponent/>
  </div>
  
  
  );
}

export default App;
