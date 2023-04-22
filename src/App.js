import Navbar from './components/Navbar';
import userScreen from './components/userScreen';
import ChatScreenCard from './components/ChatScreenCard'

import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom" ;

import './App.css';
import UserScreen from './components/userScreen';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar/>
      {/* <div className='d-flex'> */}
        <Routes>
        <Route path={"/"} element={<UserScreen/>}/>
          <Route path="chat/:id" element={<ChatScreenCard/>}/>
      </Routes>
      {/* </div> */}
      
    </div>
      
    </Router>
    
  );
}

export default App;
