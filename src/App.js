import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main/Main";
import { Features } from "./components/Features";
import { PricingSection } from "./components/Pricing";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Features />
      <PricingSection />
      <Footer />
    </div>
  );
}

export default App;
