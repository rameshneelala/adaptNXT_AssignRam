import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";
import Content from "./Components/Content";
import "./App.css";

const App = () => (
  <>
    <Header />
    <div className="dash-content-container">
      <Dashboard />
      <Content />
    </div>
  </>
);

export default App;
