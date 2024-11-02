import logo from './logo.svg';
import './App.css';
import RegistroTable from './components/RegistroTable';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Sidebar />
        <RegistroTable />
      </div>
    </div>
  );
}

export default App;