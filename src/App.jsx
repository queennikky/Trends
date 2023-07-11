import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Homepage";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
   return (
     <div className="container-md">
       <Router>
         <Header />
         <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/About" about element={<About />} />
           <Route path="*" element={<Error />} />
         </Routes>
         <Footer />
       </Router>
     </div>
   );
}

export default App
