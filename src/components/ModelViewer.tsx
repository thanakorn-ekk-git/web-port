"use client";
import { createElement, useEffect, useState } from "react";
export function ModelViewer({ model }: { model: { src: string; wireframeSrc?: string; poster?: string; alt: string } }) {
  useEffect(() => { import("@google/model-viewer"); }, []);
  const [wireframe, setWireframe] = useState(false);
  const showToggle = Boolean(model.wireframeSrc);
  const activeSrc = wireframe && model.wireframeSrc ? model.wireframeSrc : model.src;
  return <section className="model-viewer"><div className="model-viewer-head"><p className="eyebrow">Interactive asset</p>{showToggle && <button type="button" className="wireframe-toggle" onClick={() => setWireframe((w) => !w)} aria-pressed={wireframe}>{wireframe ? "Shaded view" : "Wireframe view"}</button>}</div>{createElement("model-viewer", { src: activeSrc, poster: wireframe ? undefined : model.poster, alt: model.alt, "camera-controls": true, "auto-rotate": true, ar: true })}<p className="model-help">Drag to rotate · scroll to zoom · full-screen controls are available in the viewer. **Material may display not correctly.</p></section>;
}
