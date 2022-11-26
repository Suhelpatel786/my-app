import Todo from "../model";
import {AiFillEdit,AiFillDelete,} from "react-icons/ai"
import{MdFileDownloadDone} from "react-icons/md"
import "./style.css"
import {useEffect, useRef, useState} from "react"
type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}
const SingleTodo = ({todo,todos,setTodos}:Props)=>{
    const handleDone = (id:number)=>{
            setTodos(todos.map((todo)=>(
                todo.id === id? {...todo,isDone:!todo.isDone}:todo
            )))
    }

    const handleDelete = (id:number)=>{
      setTodos(todos.filter((todo)=>todo.id!== id))
    }

//creating the two state for the edit part
const [edit,setEdit]=useState<boolean>(false);
const [editTodo,setEditTodo]=useState<string>(todo.todo)

const handleEditTodo = (e:React.FormEvent,id:number)=>{
e.preventDefault();

 setTodos(todos.map((todo)=>(
todo.id===id?{...todo,todo:editTodo}:todo
 )))
setEdit(false)
}
const inputRef = useRef<HTMLInputElement>(null);
useEffect(()=>{
    inputRef.current?.focus()
},[edit])
return(
    <form className="todosingle" onSubmit={(e)=>handleEditTodo(e,todo.id)}>
        {
         edit?(
            <input className="editInput" ref={inputRef} value={editTodo} onChange={(e)=>setEditTodo(e.target.value)}/>
         ): todo.isDone?(
            <s className="singlText">{todo.todo}</s>

        ):(
            <span className="singlText">{todo.todo}</span>

        )
        }
        <div>
            <span className="icons" onClick={()=>{
                if(!edit && !todo.isDone)
                    setEdit(!edit);
            }}>
                <AiFillEdit/>
            </span>
            <span className="icons" onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete/>
            </span>
            <span className="icons" onClick={()=>handleDone(todo.id)}>
                <MdFileDownloadDone/>
            </span>
        </div>
    </form>
)
}

export default SingleTodo;