
import React from 'react';
import './App.css';
import MainComponent from './useContext/MainComponent';
import LoginContexProvider from './useContext/context/LoginContexProvider';



function App() {
  return (
    <div className="App">
    <LoginContexProvider>

        <MainComponent/>
   

    </LoginContexProvider>


    </div>
  );
}

export default App;
