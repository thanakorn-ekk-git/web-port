import Link from "next/link";
import { Artwork } from "@/components/Artwork";
export default function AboutPage() 
{ return <main className="content-page about-page">
    <header className="page-heading"><p className="eyebrow">About</p>
    <h1>Making art that<br />belongs in the <i>game.</i></h1></header>
    <section className="about-detail">
        <Artwork src="images/profile-grey.png" alt="Profile picture" /><div>
            <p className="lede">Thanakorn Ekakool is a 3D Artist / 3D Modeler with a focus on the bridge between authored art and game implementation.</p>
            <p className="body-copy">The work centers on character and asset creation through a Blender-based workflow: modeling, sculpting, topology, UVs, texturing, rigging, animation, and practical delivery into Unreal Engine or Unity.</p>
            <p className="body-copy">This portfolio is designed to show both sides of the process—how an asset looks, and how it gets ready to work in a game.</p>
            <p className="eyebrow" style={{ marginTop: 28 }}>Roles I'm interested in</p>
            <div className="chips">{["3D Artist / Modeler", "3D Generalist", "Technical Artist", "Game Developer"].map((role) => <span key={role}>{role}</span>)}</div>
            <Link className="button" href="/contact" style={{ marginTop: 28 }}>Start a conversation <b>↗</b></Link></div></section></main>; }
