import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';

import AllRoutes from "./component/Allroutes"
import { Footer } from './component/footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
       <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
