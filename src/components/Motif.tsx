type MotifProps = {
  className?: string;
  variant?: 'flower' | 'rosette';
};

export function Motif({ className = '', variant = 'flower' }: MotifProps) {
  const isRosette = variant === 'rosette';
  const outerPetals = Array.from({ length: 12 }, (_, index) => index * 30);
  const innerPetals = Array.from({ length: 8 }, (_, index) => index * 45);

  return (
    <svg
      className={`motif ${className}`}
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      fill="currentColor"
    >
      <g className="motif-outer">
        {outerPetals.map((angle) => (
          <g key={angle} transform={`rotate(${angle} 200 200)`}>
            <path
              d={
                isRosette
                  ? 'M200 24 C207 47 231 57 229 80 C247 91 250 112 235 130 C224 144 211 153 200 168 C189 153 176 144 165 130 C150 112 153 91 171 80 C169 57 193 47 200 24Z'
                  : 'M200 32 C224 53 238 72 224 92 C248 105 246 127 229 141 C217 151 206 157 200 172 C194 157 183 151 171 141 C154 127 152 105 176 92 C162 72 176 53 200 32Z'
              }
            />
            <path
              d="M200 62 C214 80 216 94 206 106 C222 115 224 128 200 148 C176 128 178 115 194 106 C184 94 186 80 200 62Z"
              fill="var(--motif-secondary, currentColor)"
            />
            <circle cx="200" cy="40" r="3" fill="var(--motif-core, currentColor)" />
            <circle cx="200" cy="117" r="5" fill="var(--motif-core, currentColor)" />
          </g>
        ))}
        {outerPetals.map((angle) => (
          <circle
            key={`edge-${angle}`}
            cx="200"
            cy="15"
            r={isRosette ? 4 : 3}
            transform={`rotate(${angle + 15} 200 200)`}
            fill="var(--motif-core, currentColor)"
          />
        ))}
      </g>

      <circle cx="200" cy="200" r="103" fill="var(--motif-secondary, currentColor)" />
      <circle cx="200" cy="200" r="95" fill="none" stroke="currentColor" strokeWidth="3" />

      <g className="motif-inner">
        {innerPetals.map((angle) => (
          <g key={angle} transform={`rotate(${angle + (isRosette ? 22.5 : 0)} 200 200)`}>
            <path
              d="M200 111 C223 121 233 141 220 162 C213 173 205 181 200 193 C195 181 187 173 180 162 C167 141 177 121 200 111Z"
              fill="var(--motif-core, currentColor)"
            />
            <path d="M200 126 C211 138 214 149 200 170 C186 149 189 138 200 126Z" />
          </g>
        ))}
        <circle cx="200" cy="200" r="58" />
        {Array.from({ length: 16 }, (_, index) => (
          <circle
            key={`dot-${index}`}
            cx="200"
            cy="151"
            r="3.5"
            transform={`rotate(${index * 22.5} 200 200)`}
            fill="var(--motif-secondary, currentColor)"
          />
        ))}
        <circle cx="200" cy="200" r="36" fill="var(--motif-secondary, currentColor)" />
        <circle cx="200" cy="200" r="25" fill="var(--motif-core, currentColor)" />
        {innerPetals.map((angle) => (
          <circle
            key={`heart-${angle}`}
            cx="200"
            cy="184"
            r="3"
            transform={`rotate(${angle} 200 200)`}
          />
        ))}
        <circle cx="200" cy="200" r="6" />
      </g>
    </svg>
  );
}
