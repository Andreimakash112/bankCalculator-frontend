import React,{useState} from 'react';
import './App.css';
import Header from './components/Header';
import Main from './views/Main'
import Footer from './components/Footer'
import Banking from './views/Banking';
function App() {

const[page, setPage] = useState('Main')

const pages = {
  Main :<Main />,
  Banking:<Banking />
}

  return (
    <div className="App">
    
<Header setPage = {setPage}/>
{pages[page]}
<Footer />
    </div>
  );
}

export default App;
