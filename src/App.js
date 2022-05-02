import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" component={<Home />} />
        <Route exact path="/about" component={<About />} />
        <Route exact path="/services" component={<Services />} />
        <Route exact path="/contact" component={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
