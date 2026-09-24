"use client";
import { useEffect, useRef, useState } from "react";

export function Artwork({ src, alt, className = "", label, fit, style }: { src: string; alt: string; className?: string; label?: string; fit?: "cover" | "contain" | "fill"; style?: React.CSSProperties }) {
  const isPlaceholder = src.startsWith("placeholder:");
  const palette = src.includes("sword") ? "gold" : src.includes("combat") ? "red" : src.includes("unreal") ? "violet" : src.includes("unity") ? "cyan" : "lime";
  if (!isPlaceholder) return <img className={`artwork ${className}`} src={src} alt={alt} loading="lazy" draggable={false} style={{ ...(fit ? { objectFit: fit } : undefined), ...style }} />;
  return <div className={`artwork art-${palette} ${className}`} role="img" aria-label={alt}><i /><b /><em /><span>{label ?? alt.replace(" placeholder", "")}</span></div>;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 4;

export function Gallery({ items }: { items: { src: string; alt: string; caption?: string; aspect?: string }[] }) {
  const [active, setActive] = useState<number | null>(null);
  const [scale, setScale] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const dragRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);
  const scaleRef = useRef(scale);
  scaleRef.current = scale;

  const reset = () => { setScale(1); setPan({ x: 0, y: 0 }); };
  const show = (index: number) => { setActive(index); reset(); };
  const move = (step: number) => { setActive((current) => current === null ? null : (current + step + items.length) % items.length); reset(); };

  // Wheel zoom needs a real (non-passive) DOM listener — React's onWheel is
  // registered passive under the hood, so e.preventDefault() there silently
  // does nothing and the page scrolls underneath the lightbox regardless.
  useEffect(() => {
    const el = frameRef.current;
    if (!el) return;
    const handler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      setScale((s) => {
        const next = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, s - e.deltaY * 0.0018));
        if (next <= MIN_ZOOM) setPan({ x: 0, y: 0 });
        return next;
      });
    };
    el.addEventListener("wheel", handler, { passive: false });
    return () => el.removeEventListener("wheel", handler);
  }, [active]);

  const onMouseDown = (e: React.MouseEvent) => {
    if (scale <= MIN_ZOOM) return;
    e.preventDefault();
    dragRef.current = { startX: e.clientX, startY: e.clientY, panX: pan.x, panY: pan.y };
    setDragging(true);
  };
  const onMouseMove = (e: React.MouseEvent) => {
    if (!dragRef.current) return;
    setPan({ x: dragRef.current.panX + (e.clientX - dragRef.current.startX), y: dragRef.current.panY + (e.clientY - dragRef.current.startY) });
  };
  const endDrag = () => { dragRef.current = null; setDragging(false); };

  return <>
    <div className="gallery">{items.map((item, index) => <button key={item.src} className={`gallery-item ${item.aspect ?? ""}`} onClick={() => show(index)} aria-label={`Expand ${item.alt}`}><Artwork {...item} /></button>)}</div>
    {active !== null && <div className="lightbox" role="dialog" aria-modal="true" aria-label={items[active].alt} onKeyDown={(e) => { if (e.key === "Escape") setActive(null); if (e.key === "ArrowRight") move(1); if (e.key === "ArrowLeft") move(-1); }} tabIndex={-1}>
      <button className="lightbox-close" onClick={() => setActive(null)} aria-label="Close gallery">×</button><button className="lightbox-nav previous" onClick={() => move(-1)} aria-label="Previous image">←</button>
      <div
        ref={frameRef}
        className={`lightbox-frame ${scale > MIN_ZOOM ? "zoomed" : ""}`}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={endDrag}
        onMouseLeave={endDrag}
        onDoubleClick={reset}
        style={{ cursor: scale > MIN_ZOOM ? (dragging ? "grabbing" : "grab") : "zoom-in" }}
        title={scale > MIN_ZOOM ? "Drag to pan · double-click to reset" : "Scroll to zoom"}
      >
        <Artwork {...items[active]} className="lightbox-art" style={{ transform: `translate(${pan.x}px,${pan.y}px) scale(${scale})`, transition: dragging ? "none" : "transform .15s ease-out" }} />
      </div>
      <button className="lightbox-nav next" onClick={() => move(1)} aria-label="Next image">→</button><p>{items[active].alt}</p>
    </div>}
  </>;
}
