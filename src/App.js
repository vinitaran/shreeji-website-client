// import './App.css';
import Header from './component/Header/Header';
import Navbar from './component/Navbar/Navbar';
import TopBar from './component/TopBar/TopBar';
import Home from './pages/Home/Home';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TopBar />
        <Header />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
