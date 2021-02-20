import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProblemsList from './components/ProblemsList';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <ProblemsList />
    </div>
  );
}

export default App;
