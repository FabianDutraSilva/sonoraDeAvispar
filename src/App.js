import "./App.css";

import Menu from "./componentes/Menu";
import Footer from "./componentes/Footer";

import InicioPagina from "./paginas/InicioPagina";
import ContactoPagina from "./paginas/ContactoPagina";
import NosotrosPagina from "./paginas/NosotrosPagina";
import CancionesPagina from "./paginas/CancionesPagina";

import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <>
            <Router>
                <div className='container mt-5 pt-5'>
                    <Routes>
                        <Route path='/' element={<InicioPagina />}></Route>
                        <Route path='/contacto' element={<ContactoPagina />}></Route>
                        <Route path='/nosotros' element={<NosotrosPagina />}></Route>
                        <Route path='/canciones' element={<CancionesPagina />}></Route>
                    </Routes>

                    <Menu />
                    <Footer />
                </div>
            </Router>
        </>
    );
}

export default App;
