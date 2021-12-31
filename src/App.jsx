import styles from "./App.module.css";
import Aulas from "./components/Aulas";
import Benefits from "./components/Benefits";
import FeaturedContent from "./components/FeaturedContent";
import Header from "./components/Header";

function App() {
  return (
    <div className={styles.landing}>
      <Header />
      <FeaturedContent />
      <Benefits />
      <Aulas />
    </div>
  )
}

export default App;
