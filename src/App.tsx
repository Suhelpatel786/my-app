import React from 'react';
import './App.css';
import {useState} from "react"
import InputFeild from './components/InputFeild';
import Todo from './model';
import TodoList from './components/Todolist';

// let name:string;
// name = "suhel"
// let age:number;
// let isStudent:boolean;
// let hobbies:string[]; //string array
// let tuples:[number,string];//string tuples

// let personName:unknown //this type is used when you dont know that whih value is going to
// personName  = "suhel"
// console.warn(personName);
// personName=1
// console.log(personName)
//assign the two type to the single variable


//functio   
// let numberss:Function;
// let numberszs:(name:string) => never; // here never is return nothing  and void is return undifiend

// let nuSti:string | number;
// nuSti = "sss";console.log(nuSti)
// nuSti = 11 ;console.log(nuSti)

//declaring the object in typescript
// type Person = {
//   name:string,
//   age?:number
// };

// let person1:Person = {
//   name:"SUhel",
// }

// console.log(person1.name)


//creating the state

const  App:React.FC = ()=> {
  const [todo,setTodo] = useState<string>("");
  const [todos,setTodos]=useState<Todo[]>([])
  console.log(todo)
  const handleAdd = (e: React.FormEvent)=>{
e.preventDefault();
    if(todo){
      setTodos([...todos,{id:Date.now(),todo:todo,isDone:false}])
      setTodo("")
    }
  

  }
  console.log(todos)
  return (
    <div className="App">
       <span className="heading">TASKIFY</span> 
       <InputFeild todo={todo} setTodo={setTodo} hand={handleAdd}/>
       <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

