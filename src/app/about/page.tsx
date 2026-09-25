import Link from "next/link";
import { Artwork } from "@/components/Artwork";
export default function AboutPage() 
{ return <main className="content-page about-page">
    <header className="page-heading"><p className="eyebrow">About</p>
    <h1>Making art that<br />belongs in the <i>game.</i></h1></header>
    <section className="about-detail">
        <Artwork src="/images/profile-grey.png" alt="Profile picture" /><div>
            <p className="lede">My name is Thanakorn Ekakool. I enjoy the moment a 3D asset stops being a model and starts becoming part of a game..</p>
            <p className="body-copy">My workflow centers around Blender, where I build characters and game assets through modeling, sculpting, retopology, UVs, texturing, rigging and animation. I then bring those assets into Unreal Engine or Unity to see how they actually perform in a real-time environment.</p>
            <p className="body-copy">I'm especially interested in creating stylized characters and game-ready assets while continuing to grow toward a character-focused 3D Artist role.</p>
            <p className="eyebrow" style={{ marginTop: 28 }}>Roles I'm interested in</p>
            <div className="chips">{["3D Artist / Modeler", "3D Generalist", "Technical Artist", "Game Developer"].map((role) => <span key={role}>{role}</span>)}</div>
            <Link className="button" href="/contact" style={{ marginTop: 28 }}>Start a conversation <b>↗</b></Link></div></section></main>; }
