import './App.css';
import { Outlet } from 'react-router'



function Main() {
  return (
    <div className="App">
      <Outlet />
      <h1>Main</h1>
    </div>
  );
}

export default Main;
