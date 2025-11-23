import { Project } from "./projects";

// Helper function to get project by slug
export function getProjectBySlug(slug: string, projects: Project[]): Project | undefined {
  return projects.find((project) => {
    const projectSlug = project.link.replace("/project/", "").replace(/\/$/, "");
    return projectSlug === slug;
  });
}

// Helper function to get project by ID
export function getProjectById(id: string, projects: Project[]): Project | undefined {
  return projects.find((project) => project.id === id);
}

