import "./App.css";
import RoutesConfig from "./routes/routes-config";
import Navbar from "./components/navbar-layout/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App" style={{ maxWidth: "100%" }}>
      <RoutesConfig />
    </div>
  );
}

export default App;
