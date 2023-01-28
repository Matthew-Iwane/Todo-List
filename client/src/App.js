import './index.css';
import {Card} from './components/Card.jsx'
import { NavBar } from './components/NavBar.jsx'

function App() {
  return (
    <div>
      <NavBar />
      <div className="
      w-screen min-h-screen flex flex-col justify-center items-center overflow-auto
      bg-gradient-to-b from-slate-500 to-slate-800" 
      >
        <Card />
      </div>
    </div>
  );
}

export default App;
