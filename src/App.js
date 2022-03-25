import './App.css';
import { BrowserRouter, Switch, Route, Redirect, Routes} from 'react-router-dom';
import NavBar from './components/navbar'

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/noted" element={
        <div className="app">
          
        </div>
      }></Route>

      <Route path="*" element={
        <div>Error, not a defined route</div>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
