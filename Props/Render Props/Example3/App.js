
import './App.css';
import ClickCounterTow from './RenderProps/ClickCounterTow';
import MHourCounter from './RenderProps/MHourCounter';
import User from './RenderProps/User';
// import HChoc2 from './HOC/HOC2/HourCounter';
// import CBHC2 from './HOC/HOC2/ClickButton'



function App() {
  return (
    <div className="App">
{/* 
        <CBHC2 name='Sajiiiiii'/>
      <HChoc2 name='KUUUSA'/> */}

      {/* <ClickCounterTow/>
      <MHourCounter/> */}
      <User render={(isLoggedIn)=> isLoggedIn? 'Sajii':'Zooro'}/>
    
      

    </div>
  );
}

export default App;
