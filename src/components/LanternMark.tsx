/** A small hanging-lantern ornament inspired by the café's pierced-metal lamps. */
export function LanternMark({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 48 72" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false">
      <g stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M24 2v7m-5 5a5 5 0 0 1 10 0v5H19v-5Z" />
        <path d="m16 21-5 8 5 3h16l5-3-5-8H16Z" />
        <path d="m16 32-6 13 8 15h12l8-15-6-13M24 32v28M10 45h28" />
        <path d="m16 32 2 13 3 15m11-28-2 13-3 15M18 60l6 6 6-6m-6 6v4" />
      </g>
      <path d="M24 36c-5 5-6 10 0 16 6-6 5-11 0-16Z" fill="currentColor" />
      <path d="M18 24h12" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}
