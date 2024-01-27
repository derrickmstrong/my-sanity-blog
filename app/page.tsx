import { getProjects } from "@/utils/sanity-utils";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const projects = await getProjects();

  return (
    <div className="max-w-5xl mx-auto py-10">
      <h1 className="ml-2 md:ml-0 text-7xl font-extrabold">
        Ahola, I&apos;m{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
          Derrick
        </span>
        !
      </h1>
      <p className="my-3 ml-2 md:ml-0 text-xl text-gray-600">
        Check out my latest adventures...
      </p>
      <h2 className="mt-24 ml-2 md:ml-0 font-bold text-gray-700 text-3xl">
        My Adventures
      </h2>
      <div className="mt-2 grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-8 py-3">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="border-2 border-gray-500 rounded-lg m-2 md:m-0 p-1 hover:scale-105 hover:border-blue-500 transition"
          >
            {project.image && (
              <Image
                src={project.image}
                alt=""
                width={6000}
                height={300}
                className="object-cover rounded-lg border border-gray-500"
              />
            )}
            <div className="mt-2 font-extrabold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              {project.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
