import Image from "next/image";
import type { Chart } from "@/lib/customers";

const CARD = "rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_1px_2px_rgba(16,24,40,0.05)]";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2.5 py-1 text-[12px] font-bold text-emerald-600">
      {children}
    </span>
  );
}

function BarChart({ chart }: { chart: Extract<Chart, { type: "bar" }> }) {
  const max = Math.max(...chart.bars.map((b) => b.value));
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      <div className="mt-7 flex h-[180px] items-end justify-between gap-3">
        {chart.bars.map((b) => (
          <div key={b.label} className="flex flex-1 flex-col items-center justify-end gap-2">
            <span className={`text-[12px] font-bold ${b.highlight ? "text-[#2465f6]" : "text-slate-500"}`}>{b.display}</span>
            <div
              className={`w-full rounded-t-md ${b.highlight ? "bg-[#2465f6]" : "bg-[#cfe0ff]"}`}
              style={{ height: `${Math.max(8, (b.value / max) * 150)}px` }}
            />
            <span className="text-[11px] font-medium text-slate-400">{b.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function LineChart({ chart }: { chart: Extract<Chart, { type: "line" }> }) {
  const W = 320;
  const H = 150;
  const ys = chart.points.map((p) => p.y);
  const maxY = Math.max(...ys) * 1.1;
  const stepX = W / (chart.points.length - 1);
  const coords = chart.points.map((p, i) => [i * stepX, H - (p.y / maxY) * H] as const);
  const linePath = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${W},${H} L0,${H} Z`;
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="mt-5 h-[190px] w-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="lc-fill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3559e9" stopOpacity="0.22" />
            <stop offset="100%" stopColor="#3559e9" stopOpacity="0.02" />
          </linearGradient>
        </defs>
        {chart.baseline !== undefined ? (
          <line x1="0" y1={H - (chart.baseline / maxY) * H} x2={W} y2={H - (chart.baseline / maxY) * H} stroke="#cbd5e1" strokeWidth="1" strokeDasharray="4 4" vectorEffect="non-scaling-stroke" />
        ) : null}
        <path d={areaPath} fill="url(#lc-fill)" />
        <path d={linePath} fill="none" stroke="#2465f6" strokeWidth="2.5" strokeLinejoin="round" strokeLinecap="round" vectorEffect="non-scaling-stroke" />
      </svg>
      <div className="mt-2 flex justify-between text-[11px] font-medium text-slate-400">
        {chart.points.map((p) => (
          <span key={p.x}>{p.x}</span>
        ))}
      </div>
      {chart.baselineLabel ? <p className="mt-2 text-[12px] text-slate-400">{chart.baselineLabel}</p> : null}
    </div>
  );
}

function CoverageChart({ chart }: { chart: Extract<Chart, { type: "coverage" }> }) {
  const Row = ({ label, n, strong }: { label: string; n: number; strong?: boolean }) => (
    <div className="flex items-center gap-4">
      <span className="w-[56px] text-[12px] font-semibold uppercase tracking-[0.06em] text-slate-400">{label}</span>
      <div className="flex flex-1 gap-2">
        {Array.from({ length: chart.total }).map((_, i) => (
          <span key={i} className={`h-7 flex-1 rounded-md ${i < n ? "bg-[#3559e9]" : "border border-slate-200 bg-white"}`} />
        ))}
      </div>
      <span className={`text-[15px] font-bold ${strong ? "text-[#2465f6]" : "text-slate-400"}`}>
        {n}/{chart.total}
      </span>
    </div>
  );
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      {chart.note ? <p className="mt-2 text-[14px] text-slate-600">{chart.note}</p> : null}
      <div className="mt-6 flex flex-col gap-4">
        <Row label="Before" n={chart.before} />
        <Row label="After" n={chart.after} strong />
      </div>
    </div>
  );
}

function TimelineChart({ chart }: { chart: Extract<Chart, { type: "timeline" }> }) {
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      <div className="relative mt-8">
        <div className="absolute left-0 right-0 top-[14px] h-[2px] bg-gradient-to-r from-[#9cc0ff] to-[#2465f6]" />
        <div className="relative flex justify-between">
          {chart.steps.map((s, i) => (
            <div key={s.day} className="flex flex-1 flex-col items-center text-center">
              <span className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold text-white ${i === chart.steps.length - 1 ? "bg-[#0b1f3a]" : "bg-[#2465f6]"}`}>
                {s.day}
              </span>
              <span className="mt-2 max-w-[78px] text-[10px] font-medium leading-tight text-slate-500">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ComparisonChart({ chart }: { chart: Extract<Chart, { type: "comparison" }> }) {
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      <div className="mt-6 grid items-center gap-4 sm:grid-cols-[1fr_auto_1fr]">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-slate-400">{chart.retiredLabel}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {chart.retired.map((r) => (
              <li key={r} className="flex items-center gap-2 text-[14px] text-slate-400 line-through">
                <span className="text-slate-300">✕</span> {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-center justify-center">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2465f6] text-white">→</span>
          {chart.gateLabel ? <span className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.1em] text-slate-400">{chart.gateLabel}</span> : null}
        </div>
        <div className="rounded-2xl border border-[#cfe0ff] bg-[#f1f5ff] p-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#2465f6]">{chart.activeLabel}</p>
          <ul className="mt-3 flex flex-col gap-2">
            {chart.active.map((a) => (
              <li key={a} className="flex items-center gap-2 text-[14px] font-medium text-slate-800">
                <span className="text-[#2465f6]">✓</span> {a}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {chart.footer ? (
        <p className="mt-5 text-[13px] text-slate-500">
          <strong className="font-bold text-[#2465f6]">{chart.footer.split(".")[0]}.</strong>{chart.footer.slice(chart.footer.indexOf(".") + 1)}
        </p>
      ) : null}
    </div>
  );
}

function MotionsChart({ chart }: { chart: Extract<Chart, { type: "motions" }> }) {
  return (
    <div className={CARD}>
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        {chart.badge ? <Badge>{chart.badge}</Badge> : null}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {chart.cards.map((c) => (
          <div key={c.title} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-4">
            <div className="mb-3 h-[3px] w-full rounded-full bg-gradient-to-r from-[#9cc0ff] to-[#2465f6]" />
            <h4 className="text-[16px] font-bold text-slate-950">{c.title}</h4>
            <p className="mt-2 flex-1 text-[13px] leading-[1.5] text-slate-600">{c.body}</p>
            <div className="mt-4 flex items-center gap-2">
              <Badge>● {c.status}</Badge>
              <span className="text-[12px] text-slate-400">{c.tag}</span>
            </div>
          </div>
        ))}
      </div>
      {chart.footer ? (
        <p className="mt-5 text-[13px] text-slate-500">
          <strong className="font-bold text-[#2465f6]">{chart.footer.split(".")[0]}.</strong>{chart.footer.slice(chart.footer.indexOf(".") + 1)}
        </p>
      ) : null}
    </div>
  );
}

function BrandsGrid({ chart, compact }: { chart: Extract<Chart, { type: "brands" }>; compact?: boolean }) {
  const tileH = compact ? "min-h-[132px]" : "min-h-[230px]";
  const pad = compact ? "p-3" : "p-5";
  const nameSz = compact ? "text-[14px]" : "text-[17px]";
  return (
    <div className={`${CARD} bg-[#f7f9ff] ${compact ? "!p-5" : ""}`}>
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#6aa8ff] to-[#2465f6]" />
          <h3 className="text-[19px] font-bold tracking-[-0.01em] text-slate-950">{chart.title}</h3>
        </div>
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-400">{chart.badge ?? "Top portfolio shops"}</span>
      </div>
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ${compact ? "mt-4 gap-2.5" : "mt-6 gap-4"}`}>
        {chart.items.map((b) =>
          b.image ? (
            <div key={b.name} className={`relative flex ${tileH} flex-col justify-end overflow-hidden rounded-2xl border border-slate-200`}>
              <Image loading="eager" src={b.image} alt={b.name} fill sizes="(min-width:1024px) 360px, (min-width:640px) 50vw, 100vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b1f3a]/85 via-[#0b1f3a]/15 to-transparent" />
              <div className={`relative ${pad}`}>
                <h4 className={`${nameSz} font-bold leading-tight tracking-[-0.01em] text-white drop-shadow-sm`}>{b.name}</h4>
                <p className="mt-1.5 text-[12px] font-semibold uppercase tracking-[0.04em] text-white/80">{b.gmv}</p>
              </div>
            </div>
          ) : (
            <div key={b.name} className={`flex ${tileH} flex-col justify-between rounded-2xl border border-slate-200 bg-white ${pad}`}>
              <h4 className={`${nameSz} font-bold leading-tight tracking-[-0.01em] text-slate-950`}>{b.name}</h4>
              <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.04em] text-slate-400">{b.gmv}</p>
            </div>
          ),
        )}
      </div>
    </div>
  );
}

export default function CaseStudyCharts({ charts, compact = false }: { charts: Chart[]; compact?: boolean }) {
  return (
    <div className={`grid gap-5 ${compact ? "mt-0 grid-cols-1" : "mt-8 md:grid-cols-2"}`}>
      {charts.map((chart, i) => {
        if (chart.type === "bar") return <BarChart key={i} chart={chart} />;
        if (chart.type === "line") return <LineChart key={i} chart={chart} />;
        if (chart.type === "coverage") return <CoverageChart key={i} chart={chart} />;
        if (chart.type === "timeline") return <TimelineChart key={i} chart={chart} />;
        if (chart.type === "comparison")
          return (
            <div key={i} className="md:col-span-2">
              <ComparisonChart chart={chart} />
            </div>
          );
        if (chart.type === "brands")
          return (
            <div key={i} className="md:col-span-2">
              <BrandsGrid chart={chart} compact={compact} />
            </div>
          );
        return (
          <div key={i} className="md:col-span-2">
            <MotionsChart chart={chart} />
          </div>
        );
      })}
    </div>
  );
}
