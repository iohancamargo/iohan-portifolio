import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Layout from './components/Layout';
import PageNotFound from './components/PageNotFound';
import './App.scss'

function App() {
  return (
    <Routes>
      <Route path='*' element={<PageNotFound />} />
      <Route path="/" element={<Layout />}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
