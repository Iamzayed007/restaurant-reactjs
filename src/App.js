import Header from './components/Header/Header';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import AuthProvider from './context/AuthProvider';
import Breakfast from './components/Breakfast/Breakfast';
import Lunch from './components/Lunch/Lunch';
import Dinner from './components/Dinner/Dinner';
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';
import PlaceHolder from './components/PlaceHolder/PlaceHolder';
import FoodDetails from './components/FoodDetails/FoodDetails';
import UserCart from './components/UserCart/UserCart';
import NotFound from './components/NotFound/NotFound';
import MyOrder from './components/MyOrder/MyOrder';
import DFooter from './components/DFooter/DFooter';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Header />
          <UserCart />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Login />
            </Route>
            <Route path="/breakfast">
              <Breakfast />
            </Route>
            <Route path="/lunch">
              <Lunch />
            </Route>
            <Route path="/dinner">
              <Dinner />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/order">
              <MyOrder />
            </Route>
            <Route path="/placeHolder/:aId">
              <PlaceHolder />
            </Route>
            <Route path="/details/:Id">
              <FoodDetails />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>

          </Switch>
          {/* <Footer /> */}
          <DFooter />
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
