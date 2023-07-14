import './App.css'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Root from './routes/root';
import  Categories from './routes/categories';

function App() {

  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Routes>
                <Route path="/" element={<Root />} />
                <Route path="/categories" element={<Categories />} />
            </Routes>
        </main>
    </>
  )
}

export default App
