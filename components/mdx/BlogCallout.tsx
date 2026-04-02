import React from "react";

type BlogCalloutProps = {
  title?: string;
  children: React.ReactNode;
};

export default function BlogCallout({
  title = "ポイント",
  children,
}: BlogCalloutProps) {
  return (
    <div className="my-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">
        {title}
      </p>
      <div className="mt-3 text-base leading-8 text-slate-700">{children}</div>
    </div>
  );
}