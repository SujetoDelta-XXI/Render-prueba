import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './page/home'
import Movies from './page/Movies'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* más rutas aquí */}
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
