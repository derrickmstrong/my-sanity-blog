import { getProject } from "@/utils/sanity-utils";

type ProjectProps = {
    params: {
        project: string;
    };
};

export default async function Project({ params } : ProjectProps) {
    const slug = params.project;
    const project = await getProject(slug);

    return (
      <div className="max-w-3xl mx-auto py-20">
        <header className="flex items-center justify-between">
          <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent ml-2 md:ml-0 py-2 text-5xl drop-shadow font-extrabold">
            {project.name}
          </h1>
          <a
            href={project.url}
            title="View Project"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-100 rounded-lg text-gray-500 px-4 py-2 mr-2 md:mr-0 font-bold whitespace-nowrap hover:bg-gray-200 hover:text-gray-400 transition"
          >
            View Project
          </a>
        </header>
      </div>
    );
}