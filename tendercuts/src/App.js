import './App.css';
import Navbar from './component/Navbar';
import { Footer } from './component/footer';
import AllRoutes from './component/routes/Allroutes';

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
