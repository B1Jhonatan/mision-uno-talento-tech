import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import DataBase from "./components/ddbb/DataBase";
import PageForm3d from "./pages/page-form/PageForm3d";
import PageHome from "./pages/home/PageHome";
import HeaderComponent from "./components/navegacion/HeaderComponent";
import PageHistorial from "./pages/page-historial/PageHistorial";

function App() {
  const db = new DataBase();
  return (
    <>
      <BrowserRouter>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/elemento-3d" element={<PageForm3d db={db} />} />
          <Route path="/historial" element={<PageHistorial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
