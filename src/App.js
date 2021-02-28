// import "./App.css";
import Landing from "./components/Landing";
import About from "./components/About";
import PreBook from "./components/PreBook";
import ExploreMenu from "./components/ExploreMenu";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
function App() {
    return (
        <div className="App">
            <Landing />
            <About />
            <PreBook />
            <ExploreMenu />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
