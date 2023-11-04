import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import ContactUs from './Components/ContactUs/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <div className="font-poppins w-screen overflow-clip">
        <Header /> {/* Render the Header component outside of <Routes> */}

        <Routes>
          {/* Define routes for other pages */}
          {/* <Route path="/" element={<Header />} /> */}
          <Route path="/" element={<ContactUs />} />
        </Routes>

        <Footer /> {/* Render the Footer component outside of <Routes> */}
      </div>
    </BrowserRouter>
  );
}

export default App;

