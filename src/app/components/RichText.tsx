import parse from 'html-react-parser';

export default function RichText({ html }: { html: string }) {
  if (!html) return <></>;

  return <div className="rich-text">{parse(html)}</div>;
}
