import { cn } from "@/lib/utils";

export function Brand({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Velocentum">
      <svg
        className="block h-8 w-8 shrink-0"
        viewBox="0 0 64 64"
        shapeRendering="geometricPrecision"
        aria-hidden="true"
      >
        <path d="M10 12h12l10 18v22L10 12Z" fill="#F5451F" />
        <path d="M54 12H42L32 30v22L54 12Z" fill="#8A3FFC" />
      </svg>
      {!compact && (
        <span
          className={cn(
            "text-[1.3rem] font-extrabold leading-none tracking-[-0.055em]",
            inverse ? "text-white" : "text-ink",
          )}
        >
          velocentum
        </span>
      )}
    </span>
  );
}
