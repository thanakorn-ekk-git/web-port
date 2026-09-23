"use client";
import Link from "next/link";
import { useState } from "react";
const links = [["Home", "/"], ["Work", "/work"], ["About", "/about"], ["Resume", "/resume"], ["Contact", "/contact"]] as const;
export function Navigation() { const [open, setOpen] = useState(false); return <header className="nav"><Link className="mark" href="/" aria-label="Thanakorn Ekakool home">TE<span>.</span></Link><button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation">{open ? "Close" : "Menu"}</button><nav className={open ? "open" : ""}>{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}</nav></header>; }
