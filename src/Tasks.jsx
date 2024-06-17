import NewTask from "./NewTask"
export default function Tasks({tasks,onAdd,onDelete})
{
    return <section>
        <h2>tasks</h2>
        <NewTask onAdd={onAdd}/>

        {tasks.length===0 && ( <p className="my-6">This projects has not tasks yet</p>)}
        {tasks.length>0 && (
            <ul className="p-3 mt-7 rounded-md bg-stone-100">
                {tasks.map((task)=>(
                    <li key={task.id} className="flex justify-between my-4">
                        <span>{task.text}</span>
                        <button onClick={()=>onDelete(task.id)}>Clear</button>
                    </li>
                ))}
          
            </ul> )}
       
    </section>
}