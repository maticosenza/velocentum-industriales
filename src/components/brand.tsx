export function Brand({
  inverse = false,
  compact = false,
  navigation = false,
}: {
  inverse?: boolean;
  compact?: boolean;
  navigation?: boolean;
}) {
  return (
    <span className="inline-flex items-center gap-2.5" aria-label="Velocentum">
      <img
        src="/brand/velocentum-v-transparente.svg"
        alt=""
        aria-hidden="true"
        width={997}
        height={841}
        className={`block shrink-0 object-contain ${
          inverse
            ? "h-7 w-auto"
            : navigation
              ? "hidden"
              : "h-[27px] w-8"
        }`}
      />
      {!compact && (
        <img
          src={
            inverse
              ? "/brand/velocentum-logotipo-blanco-tight.webp"
              : "/brand/velocentum-logotipo-negro-tight.webp"
          }
          alt=""
          aria-hidden="true"
          width={768}
          height={119}
          className={`block w-auto shrink-0 object-contain ${inverse ? "h-6" : "h-[21px]"}`}
        />
      )}
    </span>
  );
}
