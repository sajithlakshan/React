
import React from 'react';
import './App.css';
import MyuserEffect from './useLayoutEffect/MyuserEffect';
import Myusememo from './useMemo/Myusememo';


function App() {
  return (
    <div className="App">
      <div>
       {/* <MyuserEffect/> */}
       <Myusememo/>
      </div>
  

    </div>
  );
}

export default App;
