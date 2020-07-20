import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import BookDetails from './components/BookDetails';
import Cart from './components/Cart';
import Home from './components/Home';
import MyOrders from './components/MyOrders';
import Toast from './components/Toast';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import store from './redux/store';

import './styles/app.scss';

function App() {
  
  return (

    <Router>
      <Provider store={store}>
        <div className="App"> 
          <Header />
          <Toast />
          <div className="container">
            <Route exact path="/" component={() => <Home />} />
            <Route exact path="/book/:id" component={() => <BookDetails />} />
            <Route exact path="/cart" component={() => <Cart />} />
            <Route exact path="/orders" component={() => <MyOrders />} />
          </div>
          <Footer />
        </div>
      </Provider>
    </Router>
  );
}

export default App;
