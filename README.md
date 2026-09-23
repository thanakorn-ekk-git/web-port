# Thanakorn Ekakool — 3D Artist Portfolio

## Run locally

Install dependencies with `pnpm install`, then start the site with `pnpm dev`.

## Add a project

1. Put artwork inside `public/portfolio/<project-slug>/`.
2. Add one `Project` object to `src/data/projects.ts`.
3. Replace the relevant `placeholder:<name>` values with public asset paths, for example `/portfolio/new-project/hero.webp`.

The Work page, category filters, featured work, and project detail route are generated automatically from that entry. Optional fields (video, `model`, `technical`, gallery, engine) only render when supplied.

## Assets

- Images: `public/portfolio/<project-slug>/`
- Videos: `public/portfolio/<project-slug>/`
- 3D models: `public/models/`
- Resume: `public/resume/thanakorn-ekakool-resume.pdf`

## Interactive models

The reusable `ModelViewer` uses `<model-viewer>`, which is designed for web-ready `.glb` / `.gltf` assets. Convert FBX files to GLB before publishing (for example via Blender: import FBX, then **File → Export → glTF 2.0**). FBX is a production interchange format, not a reliable browser delivery format; converting keeps the viewer fast and consistent while retaining an FBX source file privately if needed.

To activate a viewer for a project, add:

```ts
model: { src: "/models/your-asset.glb", alt: "Describe the model" }
```
