import type {ReactNode} from 'react';

interface FormulaDisplay {
  label: string;
  mathml: string;
  note?: string;
}

export interface ShapeCardProps {
  id: string;
  title: string;
  description?: string;
  variables: string[];
  formulas: FormulaDisplay[];
  diagrams?: ReactNode[];
}

export default function ShapeCard({
  id,
  title,
  description,
  variables,
  formulas,
  diagrams
}: ShapeCardProps) {
  return (
    <section id={id} className="rounded-2xl border border-line/70 bg-white p-6 shadow-sm">
      <div className="grid gap-6 lg:grid-cols-[minmax(220px,260px)_1fr]">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold text-ink">{title}</h3>
            {description ? <p className="mt-2 text-sm text-muted">{description}</p> : null}
          </div>
          {diagrams && diagrams.length > 0 ? (
            <div className="grid grid-cols-2 gap-3">
              {diagrams.map((diagram, index) => (
                <div key={index} className="rounded-lg border border-line/40 bg-card p-2">{diagram}</div>
              ))}
            </div>
          ) : null}
          <ul className="flex flex-wrap gap-2 text-xs font-medium text-muted">
            {variables.map((variable) => (
              <li key={variable} className="rounded-full border border-line/60 bg-slate-100 px-3 py-1">
                {variable}
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-4">
          {formulas.map((formula, index) => (
            <div key={index} className="rounded-lg border border-line/50 bg-slate-50 p-4">
              <p className="text-sm font-semibold text-ink">{formula.label}</p>
              <div
                className="mt-2 text-lg"
                dangerouslySetInnerHTML={{__html: formula.mathml}}
              />
              {formula.note ? <p className="mt-2 text-xs text-muted">{formula.note}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
