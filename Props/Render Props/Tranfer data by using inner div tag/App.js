
import './App.css';
import ClickCounterTow from './RenderProps/ClickCounterTow';
import Counter from './RenderProps/Counter';
import MHourCounter from './RenderProps/MHourCounter';




function App() {
  return (
    <div className="App">

      <Counter render={(count ,incrementC)=>(<ClickCounterTow count={count} incrementC={incrementC}/>)}/>
      <Counter render={(count ,incrementC)=>(<MHourCounter count={count} incrementC={incrementC}/>)}/>
      

    </div>
  );
}

export default App;
