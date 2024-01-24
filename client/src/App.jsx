import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import SignIn from "./pages/SignIn.jsx"
import SignUp from "./pages/SignUp.jsx"
import Header from "./components/Header";
import FooterCom from "./components/Footer.jsx";
export default function(){
  return(
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/sign-in" element={<SignIn />}/>
        <Route path="/sign-up" element={<SignUp />}/>
      </Routes>
      <FooterCom />
    </BrowserRouter>
  )
}