export default function ExtrusionMachineryCard({ heading, sub, link }) {
  // Check if link is defined before using startsWith
  const formattedLink = link && (link.startsWith('http://') || link.startsWith('https://')) ? link : `https://${link}`;

  return (
    <div>
      <div className="font-semibold text-[18px]">{heading}</div>
      <div className="text-[16px]">{sub}</div>
      {formattedLink && (
        <a href={formattedLink} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          {link}
        </a>
      )}
    </div>
  );
}
