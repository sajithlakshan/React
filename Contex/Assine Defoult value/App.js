import logo from './logo.svg';
import './App.css';
import MYForm from './FromHandling/MYForm';
import CompC from './component/CompC';
import { UserProvider } from'./component/userContex'

function App() {
  return (
    <div className="App">
    <UserProvider value="Sajith">
      <CompC/>  
    </UserProvider>

    </div>
  );
}

export default App;
