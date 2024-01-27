import { client } from "@/config/client";
import { Page } from "@/types/Page";
import { Project } from "@/types/Project";
import { groq } from "next-sanity";

export async function getProjects(): Promise<Project[]> {
  return client.fetch(
    groq`*[_type == "project"]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`
  );
}

export async function getProject(slug: string): Promise<Project> {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
    _id,
    _createdAt,
    name,
    "slug": slug.current,
    "image": image.asset->url,
    url,
    content
    }`,
    { slug },
    { next: { revalidate: 60 } }
  ) as Promise<Project>;
}

export async function getPages(): Promise<Page[]> {
  return client.fetch(
    groq`*[_type == "page"]{
    _id,
    _createdAt,
    title,
    "slug": slug.current,
    content
    }`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return client.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug },
    { next: { revalidate: 60 } }
  ) as Promise<Page>;
}
