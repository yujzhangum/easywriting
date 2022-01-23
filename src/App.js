import React, { Component } from "react";
import Header from './common/header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";
import Home from "./pages/home";
import Detail from "./pages/detail";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home />} exact Component={Home}></Route>
              <Route path='/detail' element={<Detail />} exact Component={Detail}></Route>
            </Routes>
          </BrowserRouter>
        </div>
      </Provider >
    );
  }
}

export default App;
