import React, { useState } from "react"

const PizzaForm = ({ pizzaData }) => {
  const [pizza, setPizza] = useState({
    topping: '',
    size: 'Small',
    isVegetarian: "Vegetarian"
  });

  const handleChange = (e) => {
    //console.log(e)
     e.persist()
    setPizza(prevState => {
      return (
        {...prevState,[e.target.name]: e.target.value})
    })
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    // console.log(e.nativeEvent)
  }

  return (
    <form className="form-row" onSubmit={handleSubmit}>
      <div className="col-5">
        <input name="topping" type="text" className="form-control" placeholder="Pizza Topping" value={pizza.topping} onChange={handleChange} />
      </div>
      <div className="col">
        <select name="size" value={pizza.value} onChange={handleChange} className="form-control">
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <div className="col">
        <div className="form-check">
          <input name="isVegetarian" className="form-check-input" type="radio" value="Vegetarian" checked={pizza.isVegetarian == 'Vegetarian'} onChange={handleChange} />
          <label className="form-check-label">
            Vegetarian
            </label>
        </div>
        <div className="form-check">
          <input name="isVegetarian" className="form-check-input" type="radio" value="Not Vegetarian" checked={pizza.isVegetarian == 'Not Vegetarian'} onChange={handleChange} />
          <label className="form-check-label">
            Not Vegetarian
            </label>
        </div>
      </div>
      <div className="col">
        <button type="submit" className="btn btn-success" >Submit</button>
      </div>
    </form>

  )
}

export default PizzaForm
