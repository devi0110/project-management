import { useState } from "react"
export default function NewTask({onAdd})
{
    const [enteredTask,setEnteredTask]=useState('');

    function handleChange(event)
    {
        setEnteredTask(event.target.value);
    }
    function handleClick()
    {
        if(enteredTask.trim()===''){
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('')

    }

    return <div className="flex items-center gap-4">
        <input className="bg-stone-300 rounded-sm" type="text" onChange={handleChange}value={enteredTask}/>
        <button className="text-stone-700 hover:text-stone-900" onClick={handleClick} on>Add Task</button>
    </div>
}