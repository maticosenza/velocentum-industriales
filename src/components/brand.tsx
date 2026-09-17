export function Brand({
  inverse = false,
  compact = false,
}: {
  inverse?: boolean;
  compact?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Velocentum">
      <img
        src="/brand/velocentum-v-transparente.svg"
        alt=""
        aria-hidden="true"
        width={997}
        height={841}
        className={`block w-auto shrink-0 object-contain ${inverse ? "h-7" : "h-[26px]"}`}
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
          className={`block w-auto shrink-0 object-contain ${inverse ? "h-6" : "h-[21px]"}`}
        />
      )}
    </span>
  );
}
