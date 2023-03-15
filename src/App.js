import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  const [getMessage, setGetMessage] = useState("");
  const [room, setRoom] = useState("");
  const socket = io.connect("http://localhost:5000/");

  const handleSend = () => {
    socket.emit("reactEvent", [message, room]);
  };

  useEffect(() => {
    socket.on("showMessage", (data) => {
      // console.log(data);
      setGetMessage(data);
    });
  }, [socket]);

  const handleRoom = () => {
    socket.emit("joinRoom", room);
  };

  return (
    <div className="App">
      <h1>Hello react and Socket io</h1>
      <div className="container">
        <h1>Sender: {message}</h1>
        <h1>Receiver: {getMessage}</h1>
      </div>

      <input
        onBlur={(e) => setRoom(e.target.value)}
        type="text"
        placeholder="Room"
      />
      <button onClick={handleRoom}>Join Room</button>
      <input
        onBlur={(e) => setMessage(e.target.value)}
        type="text"
        id="message"
        placeholder="message"
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}

export default App;
