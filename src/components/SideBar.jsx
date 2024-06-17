import Button from "./Button"
export default function SideBar({onStartAdding,projects,onSelectedProject,selectedProjectId})
{
 
    return(
       <aside className="w-1/3 mt-8 px-8 py-16 bg-stone-800 text-stone-200 md:w-72 rounded-r-xl">
        <h2 className="font-bold mx-2">YOUR PROJECTS</h2>
        <div>
            <Button onClick={onStartAdding}>+add project</Button>
        </div>
        <ul className="my-5">
            {projects.map((project)=>{
                let cssclass="w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-700"
                if(project.id===selectedProjectId)
                    {
                        cssclass+="bg-stone-800 text-stone-200 hover:bg-stone-600"
                    }
                    else{
                        cssclass+="text-stone-300"
                    }
            return(
                <li key={project.id}>

                <button onClick={()=>onSelectedProject(project.id)} className={cssclass}>
                    {project.title}
                </button>
            </li>
            )
})}
        </ul>
       </aside>
    )
}