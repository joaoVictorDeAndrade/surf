import styles from "./App.module.css";
import Aulas from "./components/Aulas";
import BackgroundImage from "./components/BackgroundImage";
import Benefits from "./components/Benefits";
import Contact from "./components/Contact";
import FeaturedContent from "./components/FeaturedContent";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.landing}>
      <Header />
      <FeaturedContent />
      <Benefits />
      <Aulas />
      <BackgroundImage />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
