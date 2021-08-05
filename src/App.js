import React, { Fragment } from "react";

import "./App.css";
import Cart from "./components/cart/Cart";
import { Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Products from "./pages/products";
import ProductsDetails from "./pages/products-details";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Col lg="9">
            <Router>
              <Fragment>
                <Switch>
                  <Route exact path="/" component={Products} />
                  <Route
                    exact
                    path="/products-details/:id"
                    component={ProductsDetails}
                  />
                </Switch>
              </Fragment>
            </Router>
          </Col>
          <Col lg="3">
            {" "}
            <Cart />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
