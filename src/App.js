import Content from "./components/Content/Content";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import "./common.scss";

function App() {
  return (
    <div className="container-fluid app__container">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
