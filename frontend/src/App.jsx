import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Fixos/Header";
import Navbar from "./components/Fixos/NavBar";
import Footer from "./components/Fixos/Footer";
import Publicar from "./components/Views/Publicar";
import Posts from "./components/Views/Posts";
import PostDetalhes from "./components/Views/PostDetalhe";
import Home from "./components/Views/Home";
export default function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100 bg-light">
        <Header />
        <Navbar />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detalhes/:id" element={<PostDetalhes />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/publicar" element={<Publicar/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
