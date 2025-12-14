import data from "./project.json"
import "./project.css"
interface ProjectData {
    [key: string]: any; 
}

export default function Projects(){
    // breakdown of all of my projects 
    // TODO pull from endpoint
    const selected_project = "vesta_notify"
    const project: ProjectData = data[selected_project]

    return (
        <div className="project_shell">
            <div className="image_carrousel_shell">
                <p>this is going to be an image caroselle</p>
            </div>
            <div className="information_shell">
                <div className="info_container">
                    <h2>Project Name: {project.name}</h2>
                    <p>{project.description}</p>
                    <div className="project_line_item">
                        <h4>Tech Stack: </h4>
                        <p>{project.tech_stack}</p>
                    </div>
                    <div className="project_line_item">
                        <h4>Role: </h4>
                        <p>{project.role}</p>
                    </div>
                </div>
                <div className="info_container">
                    <div>
                        <h3>Problem This Solves</h3>
                        <p>{project.problem_this_solves}</p>
                    </div>
                    <div>
                        <h3>Outcome</h3>
                        <p>{project.outcome}</p>
                    </div>
                    <div>
                        <h3>Complexity</h3>
                        <p>{project.complexity}</p>
                    </div>
                    <p>Key Features: {project.key_features}</p>
                </div>
            </div>
        </div>
    )
}