export function Brand({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2" aria-label="Velocentum">
      <img
        src="/brand/velocentum-v-transparente.svg"
        alt=""
        aria-hidden="true"
        width={1254}
        height={1254}
        className="block h-8 w-8 shrink-0 object-contain"
      />
      {!compact && (
        <span className="relative block h-6 w-[126px] shrink-0 overflow-hidden" aria-hidden="true">
          <img
            src={
              inverse
                ? "/brand/velocentum-logotipo-blanco.svg"
                : "/brand/velocentum-logotipo-negro.svg"
            }
            alt=""
            width={2117}
            height={743}
            className="absolute left-0 top-1/2 block w-full -translate-y-1/2"
          />
        </span>
      )}
    </span>
  );
}
