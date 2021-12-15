import React,{useEffect,useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './page/Home/Home';
import HelloWorld from './page/HelloWorld/HelloWorld';


const App:React.FunctionComponent = () => {
  const [animateFinished,setAnimateFinished] = useState<boolean>(false)
  return (
    <Router>
      <HelloWorld onFinished={setAnimateFinished}/>
      {
      animateFinished?
      <Routes>
        <Route path="/" element={<Navbar/>}>
          <Route path="home" element={<Home/>} />
          <Route path="about" element={<Home/>} />
          <Route path="home" element={<Home/>} />
        </Route>
      </Routes>
      :
      null}
    </Router>
  );
}

export default App;
