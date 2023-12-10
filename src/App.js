import { Navbar, Products } from "./components";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/home" element={<Products />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
