export default function ExtrusionMachineryCard({ heading, sub, link }) {
    // Add "https://" if the link doesn't already have a protocol
    const formattedLink = link.startsWith('http://') || link.startsWith('https://') ? link : `https://${link}`;
  
    return (
      <div>
        <div className="font-semibold text-[18px]">{heading}</div>
        <div className="text-[16px]">{sub}</div>
        <a href={formattedLink} target="_blank" rel="noopener noreferrer" className="text-primary underline">
          {link}
        </a>
      </div>
    );
  }
  