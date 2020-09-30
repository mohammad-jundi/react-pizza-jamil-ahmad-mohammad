import React from "react"

const Pizza = ({data,setPizzaState}) => {
  //console.log(data);
  return (
    <tr>
      <td>{data.topping}</td>
      <td>{data.size}</td>
      <td>{data.vegetarian ? "yes" : "no"}</td>
      <td><button onClick ={() => setPizzaState(data)} className='editBtn'>edit</button></td>
    </tr>
  )
}

export default Pizza
