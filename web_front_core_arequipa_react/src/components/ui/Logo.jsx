/**
 * Logo de marca Caja Arequipa — Core Financiero.
 * Isotipo: "C" institucional naranja sobre cuadrado azul marino.
 *
 * @param {Object}  props
 * @param {number}  [props.size=44]             Tamaño del isotipo en px.
 * @param {boolean} [props.wordmark=true]        Mostrar texto "Caja Arequipa".
 * @param {'dark'|'light'} [props.variant='dark'] Color del wordmark.
 */
export default function Logo({ size = 44, wordmark = true, variant = 'dark' }) {
  const textColor = variant === 'light' ? '#ffffff' : '#003087'
  const subColor  = variant === 'light' ? 'rgba(255,255,255,.80)' : '#FF6B00'
  const nameSize  = Math.round(size * 0.50)
  const subSize   = Math.max(9, Math.round(size * 0.23))

  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 12 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 48 48"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Caja Arequipa"
        role="img"
      >
        <rect width="48" height="48" rx="9" fill="#003087" />
        <path
          d="M32 13a13 13 0 1 0 0 22"
          stroke="#FF6B00"
          strokeWidth="5"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="24" cy="24" r="3.5" fill="#FF6B00" />
      </svg>

      {wordmark && (
        <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.04 }}>
          <span style={{ fontWeight: 800, fontSize: nameSize, color: textColor, letterSpacing: '-0.4px' }}>
            Caja Arequipa
          </span>
          <span style={{ fontSize: subSize, fontWeight: 700, color: subColor, letterSpacing: '1.1px' }}>
            CORE FINANCIERO
          </span>
        </span>
      )}
    </span>
  )
}
