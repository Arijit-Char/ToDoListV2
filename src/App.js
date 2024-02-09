import "./App.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Contact from "./Components/Contact";
import About from "./Components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import User from "./Components/User";
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
