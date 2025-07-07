import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PageForm3d from "./pages/page-form/PageForm3d";
import PageHome from "./pages/home/PageHome";
import PageHistorial from "./pages/page-historial/PageHistorial";
import { useState } from "react";
import HeaderComponent from "./components/navegacion/HeaderComponent";

function App() {
  const [db, setDb] = useState([]);
  return (
    <div className="contain">
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route
            path="/elemento-3d"
            element={<PageForm3d db={db} setDb={setDb} />}
          />
          <Route path="/historial" element={<PageHistorial db={db} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
