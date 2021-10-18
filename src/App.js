// import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import TopBar from './component/TopBar/TopBar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <TopBar />
      <Header />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
