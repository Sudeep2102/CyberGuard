import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header.jsx";
import Slider from "./components/scroller.jsx";
import Procedure from "./components/procedure.jsx";
import Linkrepo from "./components/linkrepo.jsx";
import Footer from "./components/footer.jsx";
import Login from "./components/login.jsx";
import Access from "./components/access.jsx";
import UserRecord from "./components/userrecord.jsx";
import ReportRecord from "./components/reportrecord.jsx";

function App() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/access" element={<Access />} />
          <Route path="/userrecord" element={<UserRecord />} />
          <Route path="/reportrecord" element={<ReportRecord />} />
        </Routes>
        <Linkrepo />
        <Footer />
      </div>
    </Router>
  );
}

const Home = () => (
  <>
    <Slider />
    <Procedure />
  </>
);
export default App;
