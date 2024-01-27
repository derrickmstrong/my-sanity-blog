import { getPage } from "@/app/(studio)/utils";
import { PortableText } from "@portabletext/react";

type PageProps = {
  params: {
    slug: string;
  };
};

export default async function Page({ params }: PageProps) {
  const slug = params.slug;
  const page = await getPage(slug);

  return (
    <div>
      <header className="flex items-center justify-between">
        <h1 className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent ml-2 md:ml-0 py-2 text-5xl drop-shadow font-extrabold">
          {page.title}
        </h1>
      </header>
      <div className="text-lg text-gray-700 mt-5 mx-2">
        <PortableText value={page.content} />
      </div>      
    </div>
  );
}
