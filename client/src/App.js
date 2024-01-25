import socketIO from 'socket.io-client';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {ChatPage} from './components/ChatPage'

const socket = socketIO.connect('http://localhost:4000');

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/'  element={<Home socket={socket}/>}/>
        <Route path='/chat'  element={<ChatPage socket={socket}/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
