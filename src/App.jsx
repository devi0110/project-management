import SideBar from "./components/SideBar";
import NewProject from "./components/NewProject";
import DefaultPage from "./components/DefaultPage";
import { useState } from "react";
import SelectedProject from "./SelectedProject";

function App() {

  const[projectState,setSetProjectState]=useState({selectedProjectId:undefined,projects:[],tasks:[]});

  function handleStartAdding()
  {
    setSetProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:null,
        
      }
    });

  }

  function handleAddProject(projectData)
  {
    setSetProjectState(prevState=>{
      const newProject={...projectData,id:Math.random()}
      return{
        ...prevState,
        selectedProjectId:undefined,
        projects:[...prevState.projects,newProject]
        
      }
    });

  }
  function handleOnCancel()
  {
    setSetProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,        
      }
    });

  }

  function handleSelectedProject(id)
  {
    setSetProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:id,        
      }
    });
  }

  function handleDelete()
  {
    setSetProjectState(prevState=>{
      return{
        ...prevState,
        selectedProjectId:undefined,   
        projects:prevState.projects.filter((project)=>project.id!=prevState.selectedProjectId)     
      }
    });
  }

  function handleAddTask(text)
  {
    setSetProjectState(prevState=>{
      const taskId=Math.random()
      const newTask={
        text:text,
        projectId:prevState.selectedProjectId,
        id:taskId
      }
      return{
        ...prevState,
        tasks:[newTask,...prevState.tasks]
        
      }
    });


  }
  function handleDeleteTask(id)
  {
    setSetProjectState(prevState=>{
      return{
        ...prevState,  
        tasks:prevState.tasks.filter((task)=>task.id!=id)     
      }
    });

  }

  const selectedProject=projectState.projects.find(project=>project.id===projectState.selectedProjectId)


  let content=<SelectedProject project={selectedProject} onDelete={handleDelete} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} tasks={projectState.tasks}/>;

  if(projectState.selectedProjectId===null)
    {
      content=<NewProject onAdd={handleAddProject} onCancel={handleOnCancel}/>
    }
    else if(projectState.selectedProjectId===undefined)
      {
        content=<DefaultPage onStartAdding={handleStartAdding}/>;
      }


  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onSelectedProject={handleSelectedProject} onStartAdding={handleStartAdding} projects={projectState.projects} selectedProjectId={projectState.selectedProjectId}/>
      {content}    

    </main>
  );
}

export default App;
