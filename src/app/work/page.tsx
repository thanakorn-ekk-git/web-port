"use client";
import { useState } from "react";
import { categories, projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { HeroSlideshow } from "@/components/HeroSlideshow";
export default function WorkPage() 
{ const [filter, setFilter] = useState("All"); const shown = filter === "All" ? projects : projects.filter((project) => project.category.includes(filter as never)); const slideshowImages = projects.map((p) => p.heroImage).filter((src) => !src.startsWith("placeholder:")); return <main className="content-page"><div className="work-hero"><HeroSlideshow images={slideshowImages} /><div className="work-hero-content"><header className="page-heading"><p className="eyebrow">Portfolio / selected work</p><h1>Built to be <i>played.</i></h1><p className="lede">Case studies that trace the path from authored 3D work to usable game assets.</p></header><div className="filters" aria-label="Filter projects">{["All", ...categories].map((category) => <button key={category} className={filter === category ? "active" : ""} onClick={() => setFilter(category)}>{category}</button>)}</div></div></div><div className="work-grid">{shown.map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div></main>; }
