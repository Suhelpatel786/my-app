import React, { useRef } from "react"
import "./style.css"

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>> 
    hand:(e: React.FormEvent)=>void;
}
const InputFeild = ({todo,setTodo,hand}:Props)=>{
  const inputRef = useRef<HTMLInputElement>(null)

return(
    <form className="input1" onSubmit={(e)=>{hand(e)
    inputRef.current?.blur();
    }}>
        <input type="input" ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} className="input" placeholder="Enter a task"/>
        <button className="button">Go</button>
    </form>
)
}

export default InputFeild;