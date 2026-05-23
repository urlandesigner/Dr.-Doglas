"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type ShowcaseCardProps = {
  tagline?: string;
  heading: string;
  description?: string;
  imageUrl?: string;
  imageAlt?: string;
  ctaText?: string;
  /** Renders the CTA as a link (preferred for navigation). */
  ctaHref?: string;
  /** Renders the CTA as a button. Ignored when `ctaHref` is set. */
  onCtaClick?: () => void;
  brandName?: string;
  services?: string[];
  className?: string;
};

export function ShowcaseCard({
  tagline,
  heading,
  description,
  imageUrl,
  imageAlt = "",
  ctaText,
  ctaHref,
  onCtaClick,
  brandName,
  services,
  className,
}: ShowcaseCardProps) {
  const ctaClasses =
    "group/cta inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#0ea5e9]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#0ea5e9]/35";

  const ctaInner = (
    <>
      {ctaText}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" />
    </>
  );

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-3xl text-text-on-dark shadow-[0_36px_80px_-40px_rgba(15,36,68,0.55)] transition-all duration-300 hover:shadow-[0_44px_96px_-44px_rgba(14,165,233,0.40)]",
        className
      )}
      style={{
        background:
          "radial-gradient(circle at 85% 0%, rgba(56,189,248,0.18), transparent 55%), linear-gradient(135deg, #0f2444, #1b3a6b)",
      }}
    >
      <div className="flex flex-col sm:flex-row">
        {/* Image */}
        {imageUrl && (
          <div className="relative flex w-full shrink-0 items-end justify-center sm:w-44">
            <div className="pointer-events-none absolute bottom-6 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={240}
              height={320}
              className="relative z-10 h-auto w-48 self-end object-contain object-bottom drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.03] sm:w-full"
            />
          </div>
        )}

        {/* Content */}
        <div className="flex flex-1 flex-col px-6 py-7 sm:py-8">
          {brandName && (
            <span className="mb-4 inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.16em] text-text-on-dark">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {brandName}
            </span>
          )}

          {tagline && (
            <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-text-on-dark">
              {tagline}
            </span>
          )}

          <h3 className="section-heading mt-2 text-2xl font-bold leading-snug">
            {heading}
          </h3>

          {description && (
            <p className="mt-3 text-sm leading-relaxed text-text-on-dark">
              {description}
            </p>
          )}

          {services && services.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-1.5">
              {services.map((service) => (
                <span
                  key={service}
                  className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-medium text-text-on-dark"
                >
                  {service}
                </span>
              ))}
            </div>
          )}

          {ctaText && (ctaHref || onCtaClick) && (
            <div className="mt-7">
              {ctaHref ? (
                <a href={ctaHref} className={ctaClasses}>
                  {ctaInner}
                </a>
              ) : (
                <button type="button" onClick={onCtaClick} className={ctaClasses}>
                  {ctaInner}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ShowcaseCard;
