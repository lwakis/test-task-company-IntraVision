import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProblemsList from './components/ProblemsList';



function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="container-main">
        <Header />
      <div className="container-problem">
        <ProblemsList/>
      </div>
      </div>
    </div>
  );
}

export default App;
