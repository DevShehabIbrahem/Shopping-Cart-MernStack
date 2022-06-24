import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Slider from "./Components/Slider/Slider";

function App() {
  return (
    <div className="App">
      <div className="layout">
        <Header />
        <Slider />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

export default App;
