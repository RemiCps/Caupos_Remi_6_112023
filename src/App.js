import './style/App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./pages/home"
import About from './pages/apropos';
import Lodge from './pages/logement';
import Error from './components/Error';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/apropos" element={<About />}/>
          <Route path="/logement" element={<Lodge />}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
