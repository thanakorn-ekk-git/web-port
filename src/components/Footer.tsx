import Link from "next/link";
export function Footer() { return <footer><span>© {new Date().getFullYear()} Thanakorn Ekakool</span><span>Blender → Game Engine</span><Link href="/contact">Let’s connect ↗</Link></footer>; }
