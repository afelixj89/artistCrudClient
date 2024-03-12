import Nav from './components/Nav.jsx';
import Home from './screens/Home.jsx';
import ArtistCreate from './screens/ArtistCreate.jsx';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Artists from './screens/Artists.jsx';
import ArtistDetail from './screens/ArtistDetail.jsx';
import ArtistEdit from './screens/ArtistEdit.jsx';




function App() {
  return (
    <div className="App">
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artists" element={<Artists />} />
      <Route path="/artists/:id" element={<ArtistDetail />} />
      <Route path="/add-artist" element={<ArtistCreate />}/>
      <Route path="/artist/:id/edit" element={<ArtistEdit />}/>
    </Routes>
    </div>
  );
}

export default App;
