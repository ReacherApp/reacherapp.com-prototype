"use client";

import { Download } from "lucide-react";

export default function PrintButton({ label = "Download PDF" }: { label?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#3559e9] px-5 py-3 text-[14px] font-semibold text-white shadow-[0_12px_30px_-8px_rgba(53,89,233,0.6)] transition hover:bg-blue-600"
    >
      <Download size={16} strokeWidth={2.4} />
      {label}
    </button>
  );
}
