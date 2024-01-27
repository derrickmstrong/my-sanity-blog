import { PortableTextBlock } from "sanity";

export type Project = {
    _id: string;
    _createdAt: Date;
    name: string;
    slug: {
        current: string;
    };
    image: {
        asset: {
        url: string;
        };
        alt: string;
    };
    url: string;
    content: PortableTextBlock[];
}