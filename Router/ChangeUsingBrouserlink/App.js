import logo from './logo.svg';
import './App.css';

import{Routes,Route}from 'react-router-dom'
import MyHome from './Router/Home';
import MYAbout from './Router/About';

function App() {
  return (
    <div className="App">
      <Routes>
       
        <Route path='/' element={ <MyHome/>}></Route>
        <Route path='about' element={ <MYAbout/>}></Route>

      </Routes>
    </div>
  );
}

export default App;
