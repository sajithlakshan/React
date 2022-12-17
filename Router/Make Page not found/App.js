import logo from './logo.svg';
import './App.css';

import{Routes,Route}from 'react-router-dom'
import MyHome from './Router/Home';
import MYAbout from './Router/About';
import { Navbar } from './Router/Navbar';
import { OrderSummary } from './Router/OrderSummary';
import NoMatch from './Router/NoMatch';

function App() {
  return (
    <div className="App">
      <>
      <Navbar/>
      <Routes>
        <Route path='/' element={ <MyHome/>}></Route>
        <Route path='about' element={ <MYAbout/>}></Route>
       
        <Route path='order-summary' element={ <OrderSummary/>}></Route>
        <Route path='*' element={ <NoMatch/>}></Route>
      </Routes>
      </>
    </div>
  );
}

export default App;
