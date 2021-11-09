// import './App.css';
import Header from "./component/Header/Header";
import Navbar from "./component/Navbar/Navbar";
import TopBar from "./component/TopBar/TopBar";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Switch, useParams } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import ProductPage from "./pages/ProductPage/ProductPage";
import OrderPage from "./pages/OrdersPage/OrderPage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <TopBar />
        <Header />
        <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <TopBar />
            <Header />
            <Navbar />
            <Home />
          </Route>
          <Route path="/products">
            <TopBar />
            <Header />
            <Navbar />
            <ProductPage />
          </Route>
          <Route path="/orders" component={OrderPage} />
          <Route path="/login">
          <TopBar />
            <Login />
          </Route>
          <Route path="/register" >
            <TopBar />
            <Register />
          </Route>
        </Switch>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
