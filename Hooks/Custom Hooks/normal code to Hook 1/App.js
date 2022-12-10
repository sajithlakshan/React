
import React from 'react';
import './App.css';
import MyCustomHooks from './Custom Hooks/MyCustomHooks';
import MyuseCallbackHook from './useCallback Hook/MyuseCallbackHook';
import MyuserEffect from './useLayoutEffect/MyuserEffect';
import Myusememo from './useMemo/Myusememo';


function App() {
  return (
    <div className="App">
      <div>
       {/* <MyuserEffect/> */}
       {/* <Myusememo/> */}
       {/* <MyuseCallbackHook/> */}
       <MyCustomHooks/>
      </div>

    </div>
  );
}

export default App;
