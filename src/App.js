import './App.css';
import { BrowserRouter, Route, Redirect, Routes} from 'react-router-dom';
import NavBar from './components/navbar'
import About from './components/about/about';
import Note from './components/note/note';

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/notes" element={<Note/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path="*" element={
        <div>Error, not a defined route</div>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
