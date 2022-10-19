import './App.css';
import React from 'react';
import Counter from './components/Counter';
import TextColor from './components/ChangingTextColor';
import ArrayofObjects from './components/ArrayofObjects';
import DigitalClock from './components/DigitalClock';
import Usestatehook from './components/Usestatehook';
import Useeffecthook from './components/Useeffecthook';
import Usecontexthook from './components/Usecontexthook';
import Bmicalculator from './components/Bmicalculator';
import AxiosApi from './components/AxiosApi';
import FetchApi from './components/FetchApi';

//blogInfo is for UseContext hook
const blogInfo = {
  React: {
    post: "Learn useContext Hooks",
    author: "Varun K"
  },
  NodeJS: {
    post: "Node Commands",
    author: "Veena M"
  }
};
export const BlogContext  = React.createContext(blogInfo);



function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <TextColor /> */}
      {/* <ArrayofObjects /> */}
      {/* <DigitalClock /> */}
      {/* <Usestatehook /> */}
      {/* <Useeffecthook /> */}
      
      {/* <BlogContext.Provider value={blogInfo}>
        <Usecontexthook />
      </BlogContext.Provider> */}
      {/* <Usecontexthook/> */}
      {/* <Bmicalculator /> */}
      {/* <AxiosApi /> */}
      <FetchApi />
    </div>
  );
}

export default App;
