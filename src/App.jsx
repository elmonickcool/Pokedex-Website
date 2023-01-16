import Footer from "./components/reusable/Footer";
import Navigation from "./components/reusable/Navigation";




function App({ children }) {


  return (
    <div className="allBG">
      <Navigation />

      {children}


      <Footer />
    </div>

  );
}

export default App;
