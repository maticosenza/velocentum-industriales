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
        <img
          src={
            inverse
              ? "/brand/velocentum-logotipo-blanco.svg"
              : "/brand/velocentum-logotipo-negro.svg"
          }
          alt=""
          aria-hidden="true"
          width={1970}
          height={330}
          className="block h-[1.2rem] w-auto shrink-0 object-contain"
        />
      )}
    </span>
  );
}
