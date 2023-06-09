
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Componants/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout></Layout>}>

            <Route index element={<Home></Home>}></Route>
            <Route path="about" element={<About></About>}></Route>
            <Route path="contact" element={<Contact></Contact>}></Route>
          </Route>


        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
