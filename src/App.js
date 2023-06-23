import './App.css';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Shop from './components/Shop_page/Shop';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/shop' element={<Shop />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
