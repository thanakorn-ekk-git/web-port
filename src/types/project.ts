export type Category = "Character" | "Prop" | "Animation" | "Rigging" | "Unreal Engine" | "Unity";
export type GalleryItem = { src: string; alt: string; caption?: string; aspect?: "wide" | "portrait" | "square" };
export type ProcessStep = { title: string; note: string; image?: string };
export type TechnicalInfo = Record<string, string | string[]>;
export type Project = {
  title: string; slug: string; category: Category[]; year: string; shortDescription: string; description: string;
  thumbnail: string; heroImage: string; gallery: GalleryItem[]; software: string[]; skills: string[]; pipeline: ProcessStep[];
  engine?: string; role: string; featured: boolean; order: number; tags: string[]; video?: string;
  model?: { src: string; wireframeSrc?: string; poster?: string; alt: string }; technical?: TechnicalInfo;
  logo?: string; thumbnailFit?: "cover" | "contain" | "fill";
};
