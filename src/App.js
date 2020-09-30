import React, { Component, Fragment, useState } from "react";
import Header from "./components/Header";
import PizzaForm from "./components/PizzaForm";
import PizzaList from "./containers/PizzaList";
function App() {

  const [activePizza, setActivePizza] = useState({})
  const setPizzaState = (pizza) => {
    setActivePizza(pizza)
    //console.log(activePizza)
  }


  return (
    <Fragment>
      <Header />
      <PizzaForm activePizza={activePizza}/>
      <PizzaList setPizzaState={setPizzaState} />
    </Fragment>
  );
}

export default App;
