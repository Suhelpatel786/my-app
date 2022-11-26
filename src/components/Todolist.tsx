import Todo from "../model";
import SingleTodo from "./SingleTodo";
import "./style.css"
interface Props{
    todos:Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>

}
const TodoList  = ({todos,setTodos}:Props) =>{

return(
    <div className="Todos">
        {
            todos.map((td)=>(
               <SingleTodo todo={td} key={td.id} todos={todos} setTodos={setTodos}/>
            ))
        }
    </div>
)
}

export default TodoList;