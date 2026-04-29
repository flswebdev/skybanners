interface Spec {
  label: string;
  value: string;
}

interface SpecsTableProps {
  title: string;
  specs: readonly Spec[];
}

export function SpecsTable({ title, specs }: SpecsTableProps) {
  return (
    <div>
      <h3 className="text-3xl sm:text-4xl font-bold text-heading mb-8 text-center">{title}</h3>
      <div className="grid grid-cols-2 border-t border-l border-card-border">
        {specs.map((spec, i) => (
          <div
            key={spec.label}
            className={`border-b border-r border-card-border px-5 py-4 ${specs.length % 2 !== 0 && i === specs.length - 1 ? "col-span-2 text-center" : ""}`}
          >
            <dt className="text-xs font-semibold uppercase tracking-widest text-muted mb-1">{spec.label}</dt>
            <dd className="text-sm font-semibold text-heading">{spec.value}</dd>
          </div>
        ))}
      </div>
    </div>
  );
}
