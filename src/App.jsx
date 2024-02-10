import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs';
import Principals from './Components/Principals/Principals';
import Services from './Components/Services/Services';
import Media from './Components/Media/Media';
import AboutUs from './Components/AboutUs/AboutUs';
import Home from './Components/Home/Home';
import Events from './Components/Events/Events';
import Testimonial from './Components/Testimonial/Testimonial';
import Blog from './Components/Blog/Blog';
import Careers from './Components/Careers/Careers';
import Admin from './Components/Admin/Admin';
import MainBlog from './Components/Blog/MainBlog';
import PageNotFound from './Components/404/PageNotFound';
import TermsConditions from './Components/TermsConditions/TermsConditions';

function App() {
  return (
    <Router>
      {/* <div className="font-poppins w-screen overflow-clip no-vertical-scroll"> */}
      <div className="font-poppins w-screen overflow-clip no-vertical-scroll md:mt-0 mt-[90px]">
        <Header /> {/* Render the Header component outside of <Routes> */}

        <Routes>
          {/* Define routes for other pages */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/media/:id/:heading" element={<MainBlog />} />
          <Route path="/" element={<Home />} />
          <Route path="/contactUs" element={<ContactUs />} />
          <Route path="/Principals" element={<Principals />} />
          <Route path="/services" element={<Services />} />
          <Route path="/media" element={<Media />} />
          <Route path="/principals" element={<Principals />} />
          <Route path="/aboutUs" element={<AboutUs />} />
          <Route path="/events" element={<Events />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/TermsConditions" element={<TermsConditions />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>

        <Footer /> {/* Render the Footer component outside of <Routes> */}
      </div>
    </Router>
  );
}

export default App;

