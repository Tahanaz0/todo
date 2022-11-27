import './componants/style.css'
import React,{useState} from 'react';

function App() {
const [todos,setTodos]=useState([]);
const [selectedtodo,setselectedtodo]=useState();
const [isEditMode,setIsEditMode]=useState(false)

const [todo,setTodo]=useState('');
function handleSubmit(e){
  e.preventDefault()
  

  if(
  isEditMode===true

  ){
    
  
   let arrob=  todos.filter((val)=>selectedtodo.id==val.id)
 if(arrob.length>0)  arrob[0].text=todo

 console.log(arrob,"taa",e,todo);

  }else{

    const newTodo={
      id:new Date().getTime(),
      text : todo,
      completed:false
    }
    setTodos([...todos].concat(newTodo))
  }
  setTodo('')
  setIsEditMode(false)

}

function handleDelte(id){
  const deleteTodo=todos.filter((to)=>to.id!==id);
  setTodos([...deleteTodo]);
}
function handleEdit(id){
  setIsEditMode(true)

  const editTodo=todos.find((i)=>i.id===id);
  setTodo([editTodo.text]);
  setselectedtodo(editTodo)
}

  return (
    <div className="App">
      <div className='app'>
      <form className="main" onSubmit={handleSubmit}>
        <input type="text" placeholder="text" onChange={(e)=>setTodo(e.target.value)} value={todo}/>
        
        {
isEditMode?
<button className="btn" type='submit'>Save</button>
:
        <button className="btn" type='submit'>Add</button>
        }
        
      </form>
      {
      todos.map((todo)=><ul className='all'>
        <li className='single'>
      <div className='search'key={todo.id}>{todo.text }</div>
      <button onClick={()=>handleDelte(todo.id)} className='btn2'>Delete</button>
      <button onClick={()=>handleEdit(todo.id)}  className='btn3'>Edit</button></li>
      </ul>)}
      </div>
    </div>
  );
}

export default App;