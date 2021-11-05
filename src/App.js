import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Banner from "./components/Banner";
import BrandArea from "./components/BrandArea";
import Category from "./components/Categoriy";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <Layout>
        <Banner />
        <Category />
        <About />
        <BrandArea />
      </Layout>
    </Router>
  );
}

export default App;
