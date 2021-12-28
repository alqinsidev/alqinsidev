import React,{useState} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './page/Home/Home';
import HelloWorld from './page/HelloWorld/HelloWorld';
import AboutMe from './page/AboutMe/AboutMe';
import Layout from './components/Layout';
import Portfolio from './page/Portfolio/Portfolio';
import Playground from './page/Playground/Playground';


const App:React.FunctionComponent = () => {
  const [animateFinished,setAnimateFinished] = useState<boolean>(true)
  return (
    <Router>
      <HelloWorld onFinished={setAnimateFinished}/>
      {
      animateFinished?
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="about" element={<AboutMe/>} />
          <Route path="portfolio" element={<Portfolio/>} />
          <Route path="home" element={<Home/>} />
          <Route path="playground" element={<Playground/>} />
        </Route>
      </Routes>
      :
      null}
    </Router>
  );
}

export default App;
