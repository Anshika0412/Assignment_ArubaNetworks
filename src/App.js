import { Outlet } from "react-router-dom";

import SignUp from "./pages/SignUp";


function App() {
  return (
    <div className="App">
      {/* <SignUp /> */}
      <Outlet />
    </div>
  );
}

export default App;
