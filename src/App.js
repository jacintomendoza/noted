import './App.css';
import { BrowserRouter, Route, Redirect, Routes} from 'react-router-dom';
import NavBar from './components/navbar'
import About from './components/about/about';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/noted" element={
        <div className="app">
          
        </div>
      }/>

      <Route path='/about' element={<About/>}/>

      <Route path="*" element={
        <div>Error, not a defined route</div>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
