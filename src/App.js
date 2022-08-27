import logo from './logo.svg';
import { CognitoUserPool } from "amazon-cognito-identity-js";
import React, {useState} from "react";


import './App.css';

function App() {
  const [email,setEmail]= useState("");
  const [password,setPassword] = useState("");
  const poolData={
    UserPoolId: "us-east-1_hkmQDOb9G",
    ClientId: "6fseldgina9a92rvn0m8014r5a"
  }
  const onSubmit= event=> {
    event.preventDefault();
    console.log("submitted...");
    userPool.signUp(
      email,password,[],null,(err,data)=> {
        if (err) console.error(err);
        console.log(data);
      }
    );
  }
  const userPool = new CognitoUserPool(poolData);
  return (
   <form onSubmit={onSubmit}>
    <input value={email} onChange={event=> setEmail(event.target.value)}  type="text" />
    <input value={password} onChange={event => setPassword(event.target.value)}  type="text" />
    <button>Sign UP</button>
   </form>
  );
}

export default App;
