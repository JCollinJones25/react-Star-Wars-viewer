import "./App.css";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="Main">
      <Outlet />
    </div>
  );
}

export default App;
