/** Renders structured article blocks with editorial typography. */
export function ArticleContent({ blocks }) {
  return (
    <div className="prose-editorial">
      {blocks.map((block, i) => {
        switch (block.type) {
          case "h2":
            return <h2 key={i}>{block.text}</h2>;
          case "h3":
            return <h3 key={i}>{block.text}</h3>;
          case "ul":
            return (
              <ul key={i}>
                {block.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "quote":
            return <blockquote key={i}>{block.text}</blockquote>;
          default:
            return <p key={i}>{block.text}</p>;
        }
      })}
    </div>
  );
}
