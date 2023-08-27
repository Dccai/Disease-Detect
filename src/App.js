import './App.css';
import { Main } from './Pages/Main/Main';
import {BrowserRouter,Routes,Route,Link} from 'react-router-dom';
import { DiseaseDetector } from './Pages/DiseaseDetector/DiseaseDetector';
import { DiseaseCatalog } from './Pages/DiseaseCatalog/DiseaseCatalog';
function App() {
  function Navigate(){
    return (
      <div id="head">
        <div id="logo">
        <h1 id="logoTitle">Disease Detective</h1>
        <div id="heart"></div>
      </div>
        <div className='headPages'>
          <Link to="/" className='headLink'replace={true}>Home</Link>
        </div>
      </div>
    );
  }
  return (
    <div className="App">
      <div id="head-replace"></div>
     <BrowserRouter>
     <Navigate/>
     <Routes>
      <Route path="/" element={<Main/>}/>
      <Route path="/DiseaseDetector" element={<DiseaseDetector/>}/>
      <Route path="/DiseaseCatalog" element={<DiseaseCatalog/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
