export default function SocialShare({ fileName }) {
  const shareText = encodeURIComponent(`Check out my compressed file: ${fileName} via ToolTonic`);
  const shareUrl = encodeURIComponent(window.location.href);

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center' }}>
      <a
        href={`https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Facebook
      </a>
    </div>
  );
}
