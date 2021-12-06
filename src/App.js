import "./App.css";
import Employees from "./pages/Employees";
import Employee from "./pages/Employee";
import { Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import { Snow } from "react-snow-particle";
import Footer from "./layout/Footer";

function App() {
  return (
    <div className="App">
      <div style={{ position: "fixed" }}>
        <Snow backgroundImage="https://firebasestorage.googleapis.com/v0/b/pinboard-25.appspot.com/o/ezgif.com-resize.gif?alt=media&token=12dae8c9-00d1-4fc8-9fff-5f1e8ba3e01d" />
      </div>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employees" element={<Employees />} />
        <Route path="/employee/:id" element={<Employee />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
