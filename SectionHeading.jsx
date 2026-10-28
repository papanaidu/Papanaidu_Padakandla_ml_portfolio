export default function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  number,
  centered = false,
}) {
  return (
    <div className={`section-heading ${centered ? "section-heading-centered" : ""}`}>
      <div className="section-heading-copy">
        <p className="eyebrow">
          <span className="eyebrow-index">{number}</span>
          {eyebrow}
        </p>
        <h2 className="section-title">
          {title}
          {accent && (
            <>
              {" "}
              <span>{accent}</span>
            </>
          )}
        </h2>
      </div>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
