import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';
import Photos from './component/Photos';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Content />}/>
        <Route path="/photos" element={<Photos />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
