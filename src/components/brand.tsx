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
      <svg className="h-7 w-7 shrink-0" viewBox="0 0 28 28" aria-hidden="true">
        <path d="M3.3 4.5h5.1l5.6 10.2v9.1L3.3 4.5Z" fill="#F5451F" />
        <path d="M24.7 4.5h-5.1L14 14.7v9.1L24.7 4.5Z" fill="#8A3FFC" />
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
