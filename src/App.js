import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main'
import Footer from './components/Footer'
import Login from './components/Login';
import ModalBox from './components/Modal.Box';

import Registration from './components/Registration';
import Admin from './views/Admin';


function App() {
const[modalBox, setModalBox] = useState('none')
const[page, setPage] = useState('Main')
const [token, setToken] = useState(localStorage.getItem('token'))
const pages = {
  Main :<Main />,
 
  Admin:<Admin token={token}settoken={setToken}/>

}

const modalBoxes = {
  none: null,
  login:<ModalBox setModalBox={setModalBox}><Login /></ModalBox>,
  Registration:<ModalBox setModalBox={setModalBox}><Registration /></ModalBox >
 
}

  return (
    <div className="App">
     
     <Header setPage={setPage} setModalBox={setModalBox} token={token}settoken={setToken} />
     { pages[page] }
     { modalBoxes[modalBox] }
     <Footer />
    </div>
  );
}

export default App;
