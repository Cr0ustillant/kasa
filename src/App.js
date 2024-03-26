import {  Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/HeaderFooter/Header';
import Footer from './components/HeaderFooter/Footer';
import Housing from './pages/Housing';
import About from './pages/About';
import Error from './pages/Error';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Housing/:id" element={<Housing />} />
        <Route path='/About' element={<About />} />
        <Route path='*' element={<Error />} />
      </Routes> 
      <Footer />   
    </div>
  );
}

export default App;
