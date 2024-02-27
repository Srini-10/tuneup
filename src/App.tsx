import "./App.css";
import RoutesConfig from "./routes/routes-config";
import Navbar from "./components/navbar-layout/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <RoutesConfig />
    </div>
  );
}

export default App;
