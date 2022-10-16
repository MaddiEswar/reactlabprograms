import './App.css';
import React from 'react';
import Counter from './components/Counter';
import TextColor from './components/ChangingTextColor';
import ArrayofObjects from './components/ArrayofObjects';
import DigitalClock from './components/DigitalClock';
import Usestatehook from './components/Usestatehook';
import Useeffecthook from './components/Useeffecthook';


function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <TextColor /> */}
      {/* <ArrayofObjects /> */}
      {/* <DigitalClock /> */}
      {/* <Usestatehook /> */}
      <Useeffecthook />
    </div>
  );
}

export default App;
