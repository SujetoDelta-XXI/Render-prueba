import { HashRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import ContactForm from './components/ContactForm'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Contact" element={<ContactForm />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App
