import Link from "next/link";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import { Pipeline } from "@/components/Pipeline";
import { Artwork } from "@/components/Artwork";
export default function Home() 
{ return <main><section className="hero">
    <div className="hero-copy"><p className="eyebrow">Selected work · 2026</p>
        <h1>Thanakorn<br /><i>Ekakool</i></h1>
        <p className="hero-title">3D Artist / 3D Modeler</p>
        <p className="lede">I shape game-ready worlds and characters—from Blender blockout to a working asset inside the engine.</p>
        <div className="hero-actions"><Link href="/work" className="button">Explore selected work <b>↗</b></Link>
        <a href="#pipeline" className="text-link">See the pipeline ↓</a></div>
    </div>
    <div className="image-wall" aria-label="Curated 3D artwork placeholder wall">{projects.slice(0, 5).map((project, index) => <div className={`wall-tile tile-${index + 1}`} key={project.slug}><Artwork src={project.thumbnail} alt={`${project.title} portfolio placeholder`} label={project.title} /></div>)}<span className="wall-note">Blender<br />→<br />Game Engine</span></div></section>
    <section className="featured section">
        <div className="section-intro"><p className="eyebrow">Selected projects</p>
        <h2>Art that holds up<br />in the engine.</h2>
        <Link className="text-link" href="/work">View all work ↗</Link></div>
        <div className="featured-grid">{projects.filter((project) => project.featured).slice(0, 4).map((project, index) => <ProjectCard key={project.slug} project={project} index={index} />)}</div>
    </section>
    <section id="pipeline" className="pipeline-section section">
        <div className="section-intro">
            <p className="eyebrow">End-to-end craft</p>
            <h2>Every step has a purpose.</h2>
            <p className="body-copy">Strong game assets are more than a beauty render. They are shaped to perform—from efficient topology and UVs to materials, rigs, motion, and engine implementation.</p></div>
            <Pipeline />
            <div className="pipeline-notes">
                {[
                    ["01 — Art direction", "Concept and reference define silhouette, material language, scale and character before the build begins."], 
                    ["02 — Asset craft", "Modeling, sculpting, retopology and UVs balance visual quality with the demands of a clean production asset."], 
                    ["03 — Movement & materials", "Texturing, rigging and animation make an asset feel responsive, readable and ready for interaction."], 
                    ["04 — Real-time delivery", "Unreal Engine and Unity implementation are treated as a final creative pass—not an afterthought."]].map(([title, note]) => <article key={title}><span>{title}</span><p>{note}</p></article>)}
            </div>
    </section>
    <section className="about-teaser section"><Artwork src="images/profile-grey.png" alt="Profile picture" />
        <div><p className="eyebrow">About me</p>
        <h2>Artistic instinct.<br />Technical awareness.</h2>
        <p className="body-copy">Thanakorn Ekakool, I'm a 3D Artist / 3D Modeler focused on character and asset creation for games. My practice bring artistic decisions and real-time constraints into the same conversation.</p>
        <Link href="/about" className="button">More about me <b>↗</b></Link>
        </div>
    </section>
    <section className="contact-cta">
        <p className="eyebrow">Available for opportunity</p>
        <h2>Let’s build something<br /><i>playable.</i></h2>
        <Link className="button" href="/contact">Get in touch <b>↗</b></Link>
    </section>
</main>; }
