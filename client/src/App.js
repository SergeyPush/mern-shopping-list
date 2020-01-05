import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import AppNavBar from "./components/AppNavBar";
import ShoppingList from "./components/ShoppingList";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <AppNavBar />
        <Container>
          <ShoppingList />
        </Container>
      </div>
    </Provider>
  );
}

export default App;
