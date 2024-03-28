

//////////// Class Component
// import React from 'react'
// class User extends  React.Component{
//     render(){
//         return(
//             <h1>This is a class Component</h1>
//         )
//     }
// }
// export default User;

//////////// functional Component

// function User(){
//     //JSX (Javascript Syntax Extension)=> using html syntax  in javascript
//     return( 
//         <h1> This is a function Component and we gonna use this one most of the time</h1>
//     );
// }

// export default User;

////////////////////////

const User = (props) =>{
    return(
        <>
        <h1>{props.firstName}</h1>
        <h2>Age: {props.age} </h2>
        <h4>Class: {props.class}</h4>
        </>
    )
}
export default User;