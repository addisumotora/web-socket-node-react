import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { posts } from "./data";
import {io} from 'socket.io-client'

function App() {
  const [username, setUserName] = useState("");
  const [user, setUser] = useState("");

  useEffect(() => {
    const socket = io('http://localhost:5000')
    socket.on('FirstEvent', (message) => {
      console.log(message,'message')
    })
  })
  return (
    <div className="container"> 
      {user ? (
        <>
          <Navbar />
         {posts.map((post) => (
           <Card post={post} user={user}/>
         ))}
        </>
      ) : (
        <form className="login">
          <input
            placeholder="username"
            onChange={(e) => setUserName(e.target.value)}
          />
          <button type="submit" onClick={() => setUser(username)}>
            Login
          </button>
        </form>
      )}
    </div>
  );
}

export default App;
