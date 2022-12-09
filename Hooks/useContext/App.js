
import { createContext } from 'react';
import './App.css';
import MainComponent from './useContext/MainComponent';

export const LoginContext = createContext()

function App() {
  return (
    <div className="App">
    <LoginContext.Provider value={"yoooooo"}>
      <div>
        <MainComponent/>
      </div>

    </LoginContext.Provider>


    </div>
  );
}

export default App;
