import Button from "./Button";

export default function ProjectSideBar({onStartAddProject,projects,onSelectProject,selectedProjectId}){
    return <aside className="w-1/3 bg-stone-900 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
     <h1 className="mb-8 uppercase font-bold text-stone-200 md:text-xl">YOUR PROJECTS</h1>
     <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
     </div>
     <ul className="mt-8">{projects.map(project=>{
      let cssClasses="w-full px-2 py-1 rounded-sm my-1 text-left hover:text-stone-200 hover:bg-stone-800"
      if(project.id===selectedProjectId){
        cssClasses +=" bg-stone-800 text-stone-200"
      }
      else{
        cssClasses +=" text-stone-400"
      }
       return <li key={project.id}>
        <button onClick={()=>onSelectProject(project.id)} className={cssClasses}>{project.title}</button>
        </li>
      })}
      </ul>
    </aside>
}