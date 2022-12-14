import { Homepage } from "./pages/Homepage";
import { PlacesToStay } from "./pages/places-to-stay";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
export const App = () => {
  return <BrowserRouter>
    <Navbar/>
  <Routes>
    <Route path='/' element = {<Homepage/>}/>
        <Route path='places-to-stay' element={<PlacesToStay/>}/>
  </Routes>
  <Footer/>
  </BrowserRouter>;
};





