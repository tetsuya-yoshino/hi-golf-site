import Link from "next/link";
import React from "react";

type BlogCTAProps = {
  title?: string;
  description?: string;
  buttonText?: string;
  href?: string;
};

export default function BlogCTA({
  title = "原因を感覚ではなく、構造で整理したい方へ",
  description = "Hi Golfの初回診断では、ショット結果・インパクト傾向・クラブ条件をもとに、何を優先して改善すべきかを整理します。",
  buttonText = "初回診断の案内を見る",
  href = "/initial-diagnosis",
}: BlogCTAProps) {
  return (
    <div className="my-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <h3 className="text-2xl font-bold tracking-tight text-slate-900">
        {title}
      </h3>
      <p className="mt-4 text-base leading-8 text-slate-600">{description}</p>
      <div className="mt-6">
        <Link
          href={href}
          className="inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}