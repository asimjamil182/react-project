
import './App.css';
import Footer from './components/Footer';
import Space from './components/Space';
import TopNav from './components/TopNav';
import HomePage from './pages/HomePage';
import NoPage from './pages/NoPage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  return (
    <BrowserRouter>
      <TopNav/>
      <main className='w-full lg:w-[70%] lg:m-auto lg:overflow-hidden font-Roboto flex-grow-[8]'>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <Space/>
      </main>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
