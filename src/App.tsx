import { Login } from "./pages/Login";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Header } from "./components/Header";
import { Detail } from "./components/Detail";


export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/home" element={<Home />}/>
          <Route path="/detail/:id" element={<Detail />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

