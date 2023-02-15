import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Ranking from "./components/ranking";
import Footer from "./components/footer";
import Header from "./components/header";
import "./components/fonts/InstagramSansScript.ttf";
import "./components/fonts/InstagramSansScriptBold.ttf";

function App() {
  return (
    <>
      <BrowserRouter>
          <Header />
          <Routes>
            {/* Son las rutas que aparecen en la URL y redirigen dependiendo de la ruta */}
            <Route path="/" element={<Home />}></Route>
            <Route path="/ranking" element={<Ranking />}></Route>
            **<Route path="*" element={<h1>404: Not Found</h1>}></Route>**
          </Routes>
          <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
