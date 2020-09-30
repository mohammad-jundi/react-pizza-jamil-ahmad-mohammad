import React, { useState, useEffect } from "react";
import Pizza from "../components/Pizza";

function PizzaList({setPizzaState}) {
  const [pizzas, setPizzas] = useState([]);
  const fetchPizzas = async () => {
    const data = await fetch('http://localhost:3000/pizzas');
    const res = await data.json();
    //console.log(res);
    setPizzas(res);
  }

  useEffect(() => {
    fetchPizzas()
  },[]);

  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Topping</th>
          <th scope="col">Size</th>
          <th scope="col">Vegetarian?</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {pizzas.map(pizza => <Pizza  data = {pizza} key = {pizza.id} setPizzaState = {setPizzaState}/>)}
      </tbody>
    </table>
  );
}

export default PizzaList;
