import { StaticImageData } from "next/image";
import { PortableTextBlock } from "sanity";

export type Project = {
  _id: string;
  _createdAt: Date;
  name: string;
  slug: {
    current: string;
  };
  image: {
    src: string | StaticImageData;
    asset: {
      url: string | StaticImageData;
    };
    alt: string;
  };
  url: string;
  content: PortableTextBlock[];
};