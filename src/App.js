import './App.css';
import { BrowserRouter, Route, Redirect, Routes} from 'react-router-dom';
import NavBar from './components/navbar/navbar'
import About from './components/about/about';
import Note from './components/note/note';
import Api from './components/api';

// https://www.youtube.com/watch?v=a_7Z7C_JCyo

function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/notes" element={<Note/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/api' element={<Api/>}/>
      <Route path="*" element={
        <div>Error, not a defined route</div>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
