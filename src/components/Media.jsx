import { Play, Image as ImageIcon } from 'lucide-react';

// Renders real media when src is set, otherwise a styled placeholder tile
// using the project's accent gradient.
export default function Media({ item, accent, ratio = '16 / 9', className = '' }) {
  if (item.src) {
    return item.type === 'video' ? (
      <video
        className={`media ${className}`}
        style={{ aspectRatio: ratio }}
        src={item.src}
        controls
        playsInline
        preload="metadata"
      />
    ) : (
      <img
        className={`media ${className}`}
        style={{ aspectRatio: ratio }}
        src={item.src}
        alt={item.caption}
        loading="lazy"
      />
    );
  }

  const [a, b] = accent;
  return (
    <div
      className={`media media-placeholder ${className}`}
      style={{
        aspectRatio: ratio,
        '--accent-a': a,
        '--accent-b': b,
      }}
      role="img"
      aria-label={item.caption}
    >
      <span className="media-placeholder-icon">
        {item.type === 'video' ? <Play size={22} /> : <ImageIcon size={22} />}
      </span>
      <span className="media-placeholder-label">{item.caption}</span>
    </div>
  );
}
