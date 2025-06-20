import "./App.css";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Reviews from './pages/Reviews';
import ContactUs from './pages/ContactUs';
import About from './pages/About';
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import PrivateRoute from './utils/PrivateRoute';
import AddReview from "./pages/AddReview";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";


export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/projects" element={<Projects />} />
    <Route path="/skills" element={<Skills />} />
    <Route path="/reviews" element={<Reviews />} />
    <Route path="/contact" element={<ContactUs />} />
    <Route path="/about" element={<About />} />
    <Route path="/login" element={<Login />} />
    
    <Route path="/add-review" element={<AddReview />} />
    <Route
      path="/admin"
      element={
        <PrivateRoute>
          <AdminDashboard />
        </PrivateRoute>
      }
    />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
      </div>
      <Footer/>
    </div>
  );
}
