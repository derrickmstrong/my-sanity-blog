import { getProjects } from "@/utils/sanity-utils";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="text-7xl font-extrabold">
        Ahola, I&apos;m{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Derrick
        </span>
        !
      </h1>
      <p className="my-3 text-xl text-gray-600">
        Check out my latest adventures...
      </p>
      <h2 className="mt-24 font-bold text-gray-700 text-3xl">My Adventures</h2>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>{project.name}</li>
        ))}
      </ul>
    </div>
  );
}
