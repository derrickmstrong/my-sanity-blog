import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./schemas";

const config = defineConfig({
  projectId: "pea6y4qw",
  dataset: "production",
  title: "Personal Blog",
  apiVersion: "2023-01-26",
  basePath: "/admin",
  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
