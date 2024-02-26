import NewProject from "./Components/NewProject";
import NoProjectSelected from "./Components/NoProjectSelected";
import ProjectSideBar from "./Components/ProjectSideBar";
import {useState} from "react";
import SelectedProject from "./Components/SelectedProject";


function App() {
 
  const [projectsState,setProjectsState]=useState({
    SelectedProjectId : undefined,
    Project: [],
    tasks:[]
  });

  function handleStartAddProject(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        SelectedProjectId : null
      }
    })
  }
  function handleAddTask(text){
    setProjectsState(prevState=>{
      const taskId=Math.random();
      const newTask={
        text:text,
        projectId : prevState.SelectedProjectId,
        id:taskId
      }
       return {
          ...prevState,
          tasks:[newTask, ...prevState.tasks]
       };
    })
  }
  function handleDeleteTask(id){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        tasks : prevState.tasks.filter(task=> task.id !== id),
      }})
  }
  function handleSelectProject(id){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        SelectedProjectId : id
      }
    })
  }
  function handleCancel(){
    setProjectsState(prevState=>{
      return {
        ...prevState,
        SelectedProjectId : undefined
      }
    })
  }
  function handleDeleteProject(){
    setProjectsState(prevState =>{
      return {
        ...prevState,
        SelectedProjectId : undefined,
        Project : projectsState.Project.filter(project=> project.id !== prevState.SelectedProjectId),
      }})
  }
  function onAddProjects(ProjectData){
    setProjectsState(prevState=>{
      const newProject={
        ...ProjectData,
        id:Math.random()
      }
       return {
          ...prevState,
          SelectedProjectId:undefined,
          Project :[
            ...prevState.Project,
            newProject
          ]
       }
    })
  } 
  const selectedProject = projectsState.Project.find(project => project.id===projectsState.SelectedProjectId)

  let content=<SelectedProject project={selectedProject}  tasks={projectsState.tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask}/>

  if(projectsState.SelectedProjectId=== null){
    content= <NewProject onAdd={onAddProjects} onCancel={handleCancel}/>
  }
  else if(projectsState.SelectedProjectId===undefined){
    content=<NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectSideBar onSelectProject={handleSelectProject} projects={projectsState.Project} onStartAddProject={handleStartAddProject} selectedProjectId={projectsState.SelectedProjectId}/>
      {content}
    </main>
  );
}

export default App;