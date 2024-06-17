import Button from "./components/Button";
import Tasks from "./Tasks";
export default function selectedProject({project,onDelete,onAddTask,onDeleteTask,tasks}) {
    const formattedDate=new Date(project.dueDate).toLocaleDateString('en-US',{
        year:'numeric',
        month:'short',
        day:'numeric'
    });
  return (
    <div className="w-[35rem] mt-16"> 
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
        <h1 className="font-bold text-[1.5rem]">TITLE</h1>
        <button className="hover:text-stone-400" onClick={onDelete}> DELETE</button>
        </div>
        <p className="text-stone-500 mb-4">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>

      </header>
      <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}/>
    </div>
  );
}
