import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Instructor from './pages/Instructor';
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer"
import { BrowserRouter, Route,  Routes } from "react-router-dom";
const App = () => {
    return(
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/instructor" element={<Instructor />} />
                <Route path="/Contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
export default App; 