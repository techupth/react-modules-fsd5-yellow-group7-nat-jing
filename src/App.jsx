import "./App.css";
import {
  Header,
  MainContent,
  Footer,
  ProductSection,
  FAQ,
} from "./components/componentX.jsx";

function App() {
  return (
    <ChakraProvider>
      <div>
        <Header />
        <MainContent />
        <ProductSection />
        <FAQ />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
