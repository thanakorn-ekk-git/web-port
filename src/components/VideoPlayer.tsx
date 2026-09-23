export function VideoPlayer({ src, poster }: { src: string; poster?: string }) {
  return <section className="video-player"><p className="eyebrow">Video</p><video src={src} poster={poster} controls playsInline preload="metadata" /></section>;
}
