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
      <h3 className="text-sm font-semibold uppercase tracking-widest text-muted mb-3">{title}</h3>
      <dl className="divide-y divide-card-border">
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between gap-4 py-3">
            <dt className="text-sm text-muted">{spec.label}</dt>
            <dd className="text-sm text-heading font-semibold text-right">{spec.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
