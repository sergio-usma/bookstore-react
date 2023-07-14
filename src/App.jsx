import './App.css'
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/home';
import Categories from './routes/categories';

function App() {

  return (
      <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categories" element={<Categories />} />
          </Routes>
      </BrowserRouter>
  )
}

export default App
