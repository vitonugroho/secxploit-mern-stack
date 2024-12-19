import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Login from "./pages/Login"
import Snake from "./pages/Home/Snake"
import CustomChart from "./components/CustomChart"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Snake" element={<Snake />} />
        <Route path="/CustomChart" element={<CustomChart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
