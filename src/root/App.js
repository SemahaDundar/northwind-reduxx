import React from "react";
import { Container } from "reactstrap";
import CartDetail from "../components/cart/CartDetail";
import Navi from "../navi/Navi";
import Dashboard from "./Dashboard";
import {Route, Switch} from 'react-router-dom';
import AddOrUpdateProduct from "../components/products/AddOrUpdateProduct";
import NotFound from "../components/common/NotFound";

function App() {
  return (
    <>
      <Container>
        <Navi />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/product" exact component={Dashboard} />
          <Route path="/cart" exact component={CartDetail} />
          <Route path="/saveproduct/"  component={AddOrUpdateProduct}/>
          <Route path="/saveproduct/:productId" component={AddOrUpdateProduct} />
          <Route exact path={NotFound}/>
          <p>


          anne ben sen veceveceıiğü 1f 1e 1c 1a 1s 1o 1ö 1i 1ü
          ama anne ama no no olmaz öm mö mö mö 1tmmmmmmmmmmmmmmmmmm
          mmmö    nöfflbhpppppppppppyzamæn
          </p>
        </Switch>

      </Container>
    </>
  );
}

export default App;
