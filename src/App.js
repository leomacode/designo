import "./App.css";
import { Navbar, Footer } from "./components";

import { createRoutes } from "./routes";

const routes = createRoutes();
function App() {
  return (
    <div className="App">
      <Navbar />
      {routes}
      <Footer />
    </div>
  );
}

export default App;
