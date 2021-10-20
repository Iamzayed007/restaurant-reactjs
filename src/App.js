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

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
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

          </Switch>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </div >
  );
}

export default App;
