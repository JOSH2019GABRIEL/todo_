import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
uuidv4();

const TodoFormm = () => {
  const [drugName, setDrugName] = useState("");
  const [drugBrand, setDrugBrand] =useState("");
  const [status, setStatus] =useState("");


  const [todoList, setTodoList] = useState([])

  const handleSubmit = e => {
    e.preventDefault();
    // console.log(todo);
    
    setTodoList([...todoList, {id: uuidv4(), drugName: drugName, drugBrand: drugBrand, status: status}])
    // let tempList = todoList;
    // tempList.push(drugName)
    // tempList.push(drugBrand)
    // tempList.push(status)
    // setTodoList(tempList)
    console.log(todoList)
    setDrugName("");
    setDrugBrand("");
    setStatus("");


  }

  return (
    <div>
      <form className='todo-form' onSubmit={handleSubmit} >
      <input type='text' placeholder='Drug Name' onChange= {(e) => console.log(setDrugName(e.target.value))} value={drugName}/>
      <input type='text' placeholder='Drug Brand...' onChange= {(e) => console.log(setDrugBrand(e.target.value))} value={drugBrand}/>
      <input type='text' placeholder='Status?...' onChange= {(e) => console.log(setStatus(e.target.value))} value={status}/>

        <button>Add Drug</button>
        
      </form>
      {todoList.map((item)=>(
        <h3 >{item.drugName}, {item.drugBrand}, {item.status}</h3>
       
      ))}
      </div>
  )
}

export default TodoFormm;