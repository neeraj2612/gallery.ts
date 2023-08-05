import{useState,useEffect} from 'react'
import Gallery from './components/Gallery'
import SearchBar from './components/SearchBar';
import Search from './utils/Search';
import{Route,Routes,BrowserRouter} from 'react-router-dom'

function App() {
 
  return (
    <div>

    <BrowserRouter>
    <Routes>
      <Route path='/'  element={<Gallery/>}/> 
      <Route path='/search/:search'  element={<Search/>}/> 
     
    </Routes>
</BrowserRouter>
    </div>

  );
}

export default App;
