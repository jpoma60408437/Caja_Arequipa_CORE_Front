import { useState } from 'react'
import { ShieldCheck, User, Lock, LogIn } from 'lucide-react'
import Logo from '../components/ui/Logo.jsx'
import Carrusel from '../components/ui/Carrusel.jsx'
import { useAuth } from '../hooks/useAuth.js'
import '../styles/home.css'

/* ─── Chips de etiquetas ─── */
const chips = (arr) => (
  <div className="carrusel__chips">
    {arr.map((v) => <span className="carrusel__chip" key={v}>{v}</span>)}
  </div>
)

/* ─── SVGs institucionales Caja Arequipa (paleta azul-naranja) ─── */

const SvgMensaje = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-msg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#001f5c" />
        <stop offset="1" stopColor="#003087" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-msg)" />
    <circle cx="840" cy="150" r="175" fill="#ffffff" opacity="0.06" />
    <circle cx="900" cy="560" r="120" fill="#FF6B00" opacity="0.12" />
    <g transform="translate(660,240)" fill="#FF6B00" opacity="0.90">
      <path d="M120 0 C134 70 170 106 240 120 C170 134 134 170 120 240 C106 170 70 134 0 120 C70 106 106 70 120 0 Z" />
      <path d="M250 160 c6 28 22 44 50 50 c-28 6 -44 22 -50 50 c-6 -28 -22 -44 -50 -50 c28 -6 44 -22 50 -50 Z" opacity="0.7" />
    </g>
  </svg>
)

const SvgMision = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-mis" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#003087" />
        <stop offset="1" stopColor="#FF6B00" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-mis)" />
    <circle cx="840" cy="150" r="170" fill="#ffffff" opacity="0.06" />
    <g transform="translate(650,190)">
      <circle cx="130" cy="130" r="125" fill="none" stroke="#ffffff" strokeWidth="16" opacity="0.90" />
      <circle cx="130" cy="130" r="80"  fill="none" stroke="#ffffff" strokeWidth="16" opacity="0.80" />
      <circle cx="130" cy="130" r="34"  fill="#FF6B00" />
      <path d="M-10 290 L150 130" stroke="#FFB300" strokeWidth="14" strokeLinecap="round" />
    </g>
  </svg>
)

const SvgVision = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-vis" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#0055b3" />
        <stop offset="1" stopColor="#003087" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-vis)" />
    <circle cx="850" cy="540" r="150" fill="#FF6B00" opacity="0.10" />
    <g transform="translate(620,220)">
      <path d="M0 90 C90 -12 270 -12 360 90 C270 192 90 192 0 90 Z" fill="#ffffff" opacity="0.94" />
      <circle cx="180" cy="90" r="54" fill="#003087" />
      <circle cx="180" cy="90" r="26" fill="#FF6B00" />
      <circle cx="198" cy="74" r="9"  fill="#ffffff" />
    </g>
  </svg>
)

const SvgValores = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-val" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#001f5c" />
        <stop offset="1" stopColor="#0055b3" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-val)" />
    <circle cx="840" cy="150" r="170" fill="#FF6B00" opacity="0.10" />
    <g transform="translate(660,200)" fill="#ffffff">
      <path d="M40 60 H200 L230 120 L120 250 L10 120 Z" opacity="0.94" />
      <path d="M40 60 L70 120 H10 Z"   fill="#FF6B00" opacity="0.80" />
      <path d="M200 60 L170 120 H230 Z" fill="#FF6B00" opacity="0.80" />
      <path d="M70 120 H170 L120 250 Z" fill="#FFB300" opacity="0.70" />
    </g>
  </svg>
)

const SvgCumplimiento = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-cum" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#003087" />
        <stop offset="1" stopColor="#0099cc" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-cum)" />
    <circle cx="800" cy="120" r="150" fill="#ffffff" opacity="0.06" />
    <g transform="translate(700,350)">
      <path d="M85 0 L160 30 V96 C160 150 128 176 85 192 C42 176 10 150 10 96 V30 Z" fill="#ffffff" opacity="0.94" />
      <path d="M52 98 l24 24 l44 -56" fill="none" stroke="#FF6B00" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const SvgMetas = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-met" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#003087" />
        <stop offset="1" stopColor="#FF6B00" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-met)" />
    <circle cx="800" cy="130" r="150" fill="#ffffff" opacity="0.06" />
    <g transform="translate(700,350)">
      <rect x="0"   y="80"  width="40" height="80"  rx="6" fill="#ffffff" opacity="0.80" />
      <rect x="60"  y="50"  width="40" height="110" rx="6" fill="#ffffff" opacity="0.88" />
      <rect x="120" y="20"  width="40" height="140" rx="6" fill="#ffffff" opacity="0.95" />
      <path d="M10 70 L80 40 L140 12" fill="none" stroke="#FFB300" strokeWidth="8" strokeLinecap="round" />
      <path d="M120 12 h26 v26" fill="none" stroke="#FFB300" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
)

const SvgBandera = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-ban" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#7a0d18" />
        <stop offset="1" stopColor="#b50f22" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-ban)" />
    <circle cx="850" cy="520" r="140" fill="#ffffff" opacity="0.06" />
    <g transform="translate(700,240)">
      <rect x="0" y="0" width="10" height="230" rx="5" fill="#FFB300" />
      <circle cx="5" cy="0" r="9" fill="#FFB300" />
      <path d="M10 14 h70 v120 h-70 Z" fill="#dc2626" />
      <path d="M80 14 h70 v120 h-70 Z" fill="#ffffff" />
      <path d="M150 14 h70 v120 h-70 Z" fill="#dc2626" />
    </g>
  </svg>
)

const SvgCapacitacion = (
  <svg className="carrusel__svg" viewBox="0 0 1000 640" preserveAspectRatio="xMidYMid slice">
    <defs>
      <linearGradient id="g-cap" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#001f5c" />
        <stop offset="1" stopColor="#FF6B00" />
      </linearGradient>
    </defs>
    <rect width="1000" height="640" fill="url(#g-cap)" />
    <circle cx="820" cy="130" r="150" fill="#ffffff" opacity="0.06" />
    <g transform="translate(680,340)">
      <rect x="10" y="70" width="170" height="120" rx="10" fill="#ffffff" opacity="0.94" />
      <rect x="80" y="70" width="30" height="120" fill="#FF6B00" />
      <rect x="-4" y="48" width="198" height="34" rx="8" fill="#ffffff" />
      <rect x="80" y="48" width="30" height="34" fill="#FF6B00" />
      <circle cx="78"  cy="40" r="20" fill="none" stroke="#ffffff" strokeWidth="12" />
      <circle cx="112" cy="40" r="20" fill="none" stroke="#ffffff" strokeWidth="12" />
    </g>
  </svg>
)

/* ─── Frases motivacionales ─── */
const FRASES = [
  'Cada microempresario que apoyamos es un sueño que crece. ¡A por las metas!',
  'Con trabajo en equipo y compromiso, Caja Arequipa sigue liderando. ¡Excelente semana!',
  'Tu cercanía con el cliente es nuestra mayor fortaleza. ¡Gracias por tu dedicación!',
  'Disciplina y rigor: así construimos una cartera sana y sostenible.',
  'Hoy es un gran día para superar tus objetivos. ¡Vamos con todo, equipo!',
  'Más de 40 años impulsando el Sur del Perú. ¡Orgullosos de ser Caja Arequipa!',
  'Cierra la semana con orgullo: tu esfuerzo transforma la vida de familias peruanas.',
]
const fraseDelDia = FRASES[new Date().getDay()]

const VALORES = ['Integridad', 'Compromiso', 'Trabajo en equipo', 'Innovación', 'Cercanía', 'Responsabilidad Social']

const SLIDES = [
  { badge: 'Mensaje del día', titulo: 'Hoy es un buen día', subtitulo: fraseDelDia, svg: SvgMensaje },
  {
    badge: 'Nuestra esencia', titulo: 'Misión',
    subtitulo: 'Impulsar el desarrollo económico y social de las familias y micro y pequeñas empresas del Perú, brindando servicios financieros de calidad con presencia regional.',
    svg: SvgMision, extra: chips(['Inclusión financiera', 'Calidad', 'Presencia regional']),
  },
  {
    badge: 'Nuestra esencia', titulo: 'Visión',
    subtitulo: 'Ser la caja municipal referente en microfinanzas del Perú, reconocida por su solidez, innovación y compromiso con el cliente.',
    svg: SvgVision, extra: chips(['Solidez', 'Innovación', 'Liderazgo']),
  },
  {
    badge: 'Nuestra esencia', titulo: 'Valores',
    subtitulo: 'Los principios que guían cada decisión en Caja Arequipa.',
    svg: SvgValores, extra: chips(VALORES),
  },
  { badge: 'Capacitación', titulo: 'Prevención de Lavado de Activos', subtitulo: 'Sesión obligatoria para asesores y administradores. Revisa tu correo institucional @cajaarequipa.pe.', svg: SvgCapacitacion },
  { badge: 'Junio — Mes de la Bandera', titulo: '¡Feliz mes patrio!', subtitulo: 'Orgullosos de servir al Perú emprendedor desde Arequipa para todo el país.', svg: SvgBandera },
  { badge: 'Productividad', titulo: 'Metas del mes', subtitulo: 'Revisa tu avance de colocaciones y nivel de mora en el dashboard institucional.', svg: SvgMetas },
  { badge: 'Cumplimiento', titulo: 'Compromisos SBS', subtitulo: 'Operamos bajo supervisión de la SBS y la FEPCMAC. Tu trabajo garantiza nuestra solidez institucional.', svg: SvgCumplimiento },
]

/* ─── Decoración geométrica institucional ─── */
const GeoDeco = ({ className }) => (
  <svg className={className} viewBox="0 0 200 200" aria-hidden="true" style={{ position:'absolute', pointerEvents:'none', zIndex:0 }}>
    <circle cx="100" cy="100" r="90" fill="none" stroke="rgba(255,255,255,.12)" strokeWidth="18" />
    <circle cx="100" cy="100" r="55" fill="none" stroke="rgba(255,107,0,.20)" strokeWidth="12" />
    <circle cx="100" cy="100" r="22" fill="rgba(255,179,0,.25)" />
  </svg>
)

export default function HomePage() {
  const { loading, error, iniciarSesion } = useAuth()
  const [dni, setDni] = useState('')
  const [password, setPassword] = useState('')
  const [recordar, setRecordar] = useState(true)
  const [olvido, setOlvido] = useState(false)

  function submit(e) {
    e.preventDefault()
    iniciarSesion(dni.trim(), password)
  }

  return (
    <div className="home">
      <div className="home__franja" />

      <header className="home-header">
        <Logo size={52} />
        <span className="home-header__chip">Sistema interno · Uso exclusivo del personal</span>
      </header>

      <div className="home-split">
        {/* Izquierda: carrusel institucional */}
        <div className="split-info">
          <Carrusel slides={SLIDES} intervalo={6000} fill />
        </div>

        {/* Derecha: login */}
        <aside className="split-login">
          <GeoDeco style={{ width:520, height:520, left:-160, bottom:-180, opacity:.5 }} />
          <GeoDeco style={{ width:260, height:260, right:-80, top:-70, opacity:.35 }} />

          <div className="split-login__inner">
            <span className="split-login__secure">
              <ShieldCheck size={14} strokeWidth={2.6} /> Conexión segura · SBS
            </span>
            <h2>Inicia sesión</h2>
            <p className="split-login__sub">Acceso del personal Caja Arequipa · ingresa con tu DNI.</p>

            <form onSubmit={submit}>
              <div className="lp-field">
                <label htmlFor="dni">Número de DNI</label>
                <div className="lp-input">
                  <User className="lp-input__icon" size={18} />
                  <input
                    id="dni" type="text" value={dni}
                    onChange={(e) => setDni(e.target.value)}
                    placeholder="Ej. 12345678"
                    autoComplete="username" required
                  />
                </div>
              </div>
              <div className="lp-field">
                <label htmlFor="pwd">Contraseña</label>
                <div className="lp-input">
                  <Lock className="lp-input__icon" size={18} />
                  <input
                    id="pwd" type="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="(en desarrollo: tu DNI)"
                    autoComplete="current-password" required
                  />
                </div>
              </div>

              <div className="lp-row">
                <label>
                  <input type="checkbox" checked={recordar} onChange={(e) => setRecordar(e.target.checked)} />
                  Recordarme
                </label>
                <button type="button" className="lp-link" onClick={() => setOlvido(v => !v)}>
                  ¿Olvidó su contraseña?
                </button>
              </div>

              {olvido && (
                <div className="lp-hint">
                  Contacta al administrador de tu agencia o escribe a soporte.ti@cajaarequipa.pe para restablecer tu contraseña.
                </div>
              )}
              {error && <div className="lp-error">{error}</div>}

              <button className="btn-login" type="submit" disabled={loading}>
                <LogIn size={18} strokeWidth={2.4} />
                {loading ? 'Ingresando…' : 'Iniciar sesión'}
              </button>
            </form>
          </div>
        </aside>
      </div>

      <footer className="home-footer-bar">
        <span>© {new Date().getFullYear()} Caja Municipal de Ahorro y Crédito Arequipa · Core Financiero — Sistema interno</span>
        <span>
          <a href="#terminos">Términos</a> · <a href="#privacidad">Privacidad</a> · <a href="#soporte">Soporte TI</a>
        </span>
      </footer>
    </div>
  )
}
