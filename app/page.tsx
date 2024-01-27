import { getProjects } from "@/utils/sanity-utils";

export default async function Home() {
  const projects = await getProjects();
  console.log('projects:', projects);
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
