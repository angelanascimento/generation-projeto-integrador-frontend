import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastContainer } from 'react-toastify';
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Cadastro from "./pages/cadastro/Cadastro";
import Contatos from "./pages/contatos/Contatos";
import About from "./pages/about/About";
import ListaCategorias from "./components/categorias/listaCategorias/ListaCategorias";
import FormularioCategorias from "./components/categorias/formularioCategorias/FormularioCategorias";
import DeletarCategoria from "./components/categorias/deletarCategoria/DeletarCategoria";
import ListaProduto from "./components/produtos/listaProduto/ListaProduto";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <AuthProvider>
      <ToastContainer />
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/contatos" element={<Contatos />} />
            <Route path="/categorias" element={<ListaCategorias />} />
            <Route
              path="/cadastroCategorias"
              element={<FormularioCategorias />}
            />
            <Route
              path="/editarCategoria/:id"
              element={<FormularioCategorias />}
            />
            <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
            </Routes>
            <Route path="/produtos" element={<ListaProduto />} />
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
