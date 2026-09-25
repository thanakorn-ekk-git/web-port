function getYouTubeId(input: string): string | null {
  const patterns = [
    /youtu\.be\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/watch\?v=([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/,
    /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/,
  ];
  for (const pattern of patterns) {
    const match = input.match(pattern);
    if (match) return match[1];
  }
  if (/^[a-zA-Z0-9_-]{11}$/.test(input)) return input;
  return null;
}

export function VideoPlayer({ src, title }: { src: string; title?: string }) {
  const id = getYouTubeId(src);
  return <section className="video-player"><p className="eyebrow">Video</p>{id ? <div className="video-embed"><iframe
    src={`https://www.youtube-nocookie.com/embed/${id}`}
    title={title ?? "Project video"}
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowFullScreen
  /></div> : <p className="model-help">Couldn&apos;t read a YouTube link from &quot;{src}&quot; — paste a full youtube.com/watch?v=... or youtu.be/... URL.</p>}</section>;
}
