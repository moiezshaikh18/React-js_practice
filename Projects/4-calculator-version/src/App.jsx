import styles from "./App.module.css";
import Calculator from "../src/components/Calculator";
function App() {
  return (
    <>
      <div className={styles.calculator}>
        <Calculator />
      </div>
    </>
  );
}

export default App;
