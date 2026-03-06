import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import CookieBanner from "./components/CookieBanner";

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <CookieBanner />
        </>
    );
}

export default App;