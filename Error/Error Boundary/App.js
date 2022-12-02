
import './App.css';
import ErrorBoundry from './Error/ErrorBoundry';
import Mhero from './Error/Mhero';


function App() {
  return (
    <div className="App">

      
    <ErrorBoundry>
      <Mhero heroName="Batman"/>
    </ErrorBoundry>


    <ErrorBoundry>
      <Mhero heroName="Superman"/>
    </ErrorBoundry>


    <ErrorBoundry>
      <Mhero heroName='Joker'/>
    </ErrorBoundry>


    </div>
  );
}

export default App;
