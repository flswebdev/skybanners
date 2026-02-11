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
    <div className="rounded-xl border border-card-border bg-card p-6 shadow-sm">
      <h3 className="text-xl font-bold text-heading mb-4">{title}</h3>
      <dl className="space-y-3">
        {specs.map((spec) => (
          <div key={spec.label} className="flex justify-between gap-4">
            <dt className="text-sm text-muted font-medium">{spec.label}</dt>
            <dd className="text-sm text-heading font-semibold text-right">
              {spec.value}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
