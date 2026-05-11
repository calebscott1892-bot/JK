type SectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  inverse?: boolean;
};

export function SectionHeading({
  label,
  title,
  description,
  align = "left",
  inverse = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={
          inverse
            ? "mb-3 text-sm font-semibold text-plumbing-orange"
            : "mb-3 text-sm font-semibold text-plumbing-blue"
        }
      >
        {label}
      </p>
      <h2
        className={
          inverse
            ? "text-3xl font-semibold leading-tight text-white sm:text-4xl"
            : "text-3xl font-semibold leading-tight text-navy-950 sm:text-4xl"
        }
      >
        {title}
      </h2>
      {description ? (
        <p
          className={
            inverse
              ? "mt-4 text-base leading-7 text-slate-300 sm:text-lg"
              : "mt-4 text-base leading-7 text-slate-600 sm:text-lg"
          }
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
