import type { Metadata } from "next";
import "./globals.css";
import "./navy.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
export const metadata: Metadata = { title: "Thanakorn Ekakool — 3D Artist", description: "3D Artist / 3D Modeler building game-ready assets from Blender to engine." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body><Navigation />{children}<Footer /></body></html>; }
