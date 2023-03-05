import Navbar from './components/Navbar';
import userScreen from './components/userScreen';
import ChatScreenCard from './components/ChatScreenCard'

import './App.css';
import UserScreen from './components/userScreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='d-flex'>
        <UserScreen/>
        <ChatScreenCard/>
      </div>
      
    </div>
  );
}

export default App;
