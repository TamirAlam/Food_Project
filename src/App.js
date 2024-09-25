import logo from "./logo.svg";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home1 from "./component/Home/Home1";
import Home2 from "./component/Home/Home2";
import Home3 from "./component/Home/Home3";
import Footer from "./component/Footer/Footer";
function App() {
  return (
    <div className="App">
    <Navbar />
    <Home1 />
    <Home2/>
    <Home3/>
    <Footer/>
    </div>
  );
}

export default App;
