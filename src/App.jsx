import Header from './components/layout/Header.jsx';
import Navbar from './components/layout/Navbar.jsx';
import Home from './components/sections/Home.jsx';
import CTINews from './components/sections/CTInews.jsx';
import Blog from './components/sections/Blog.jsx';
import Contact from './components/sections/Contact.jsx';
import Footer from './components/layout/Footer.jsx';
import './index.css';
const App = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <Navbar />
      <main>
        <Home />
        <CTINews />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
