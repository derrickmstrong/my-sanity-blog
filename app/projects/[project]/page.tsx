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
        <div>{project.name}</div>
    )
}