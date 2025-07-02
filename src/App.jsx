import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
