import { defineConfig } from "sanity";
import {structureTool} from 'sanity/structure';
import {visionTool} from '@sanity/vision';

const config = defineConfig({
    projectId: "pea6y4qw",
    dataset: "production",
    title: "Personal Blog",
    apiVersion: "2023-01-26",
    basePath: "/admin",
    plugins: [structureTool(), visionTool()],
});

export default config;
