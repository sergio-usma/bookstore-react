import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./routes/home";
import Categories from "./routes/categories";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
}

export default App;
