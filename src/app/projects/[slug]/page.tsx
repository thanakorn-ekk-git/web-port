import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";
import { ProjectPage } from "@/components/ProjectPage";
export function generateStaticParams() { return projects.map(({ slug }) => ({ slug })); }
export default async function Page({ params }: { params: Promise<{ slug: string }> }) { const project = getProject((await params).slug); if (!project) notFound(); return <ProjectPage project={project} />; }
