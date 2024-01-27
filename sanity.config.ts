import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import schemaTypes from "./schemas";

const config = defineConfig({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  title: "Personal Blog",
  apiVersion: "2023-01-26",
  basePath: "/admin",
  useCdn: true,
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
