import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./global.css";
import Header from "./components/header.jsx";
import Navbar from "./components/navbar.jsx";
import Slider from "./components/scroller.jsx";
import Procedure from "./components/procedure.jsx";
import Linkrepo from "./components/linkrepo.jsx";
import Footer from "./components/footer.jsx";
import Register from "./components/register.jsx";
import Login from "./components/login.jsx";
import Regcomp from "./components/regcomp.jsx";
import FillingComplaint from "./components/FillingComplaint.jsx";
import ReportPage from "./components/ReportPage.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import Disclaimer from "./components/Disclaimer.jsx";
import PrivacyPolicy from "./components/privacyPolicy.jsx";
import ContactUs from "./components/ContactUs.jsx";
import FAQ from "./components/FAQ.jsx";
import Resources from "./components/Resources.jsx";
import News from "./components/news.jsx"; // Import News component

const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/regcomp" element={<Regcomp />} />
          <Route path="/filling-complaint" element={<FillingComplaint />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/disclaimer" element={<DisclaimerPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/news" element={<News />} /> {/* Add route for News */}
        </Routes>
        <Linkrepo />
        <Footer />
      </div>
    </Router>
  );
};

const Home = () => (
  <>
    <Slider />
    <Procedure />
  </>
);

const DisclaimerPage = () => (
  <div>
    <Disclaimer />
  </div>
);

export default App;
