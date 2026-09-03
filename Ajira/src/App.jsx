import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './common/Header'
import Footer from './common/Footer'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Products from './Pages/Products'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route
            path="*"
            element={
              <div className="flex min-h-screen items-center justify-center">
                <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
              </div>
            }
          />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}
export default App

