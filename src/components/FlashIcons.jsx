export function AnchorIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <circle cx="32" cy="10" r="6" />
            <line x1="32" y1="16" x2="32" y2="50" />
            <line x1="20" y1="24" x2="44" y2="24" />
            <path d="M10,38 C10,50 20,58 32,58 C44,58 54,50 54,38" />
        </svg>
    )
}

export function DaggerIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <line x1="32" y1="6" x2="32" y2="42" />
            <path d="M16,18 L48,18 L32,30 Z" />
            <path d="M26,42 L38,42 L32,58 Z" />
        </svg>
    )
}

export function MoonIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
            <path d="M40,6 A26,26 0 1 0 40,58 A20,20 0 1 1 40,6 Z" />
        </svg>
    )
}

export function LightningIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="currentColor" {...props}>
            <polygon points="34,4 14,36 28,36 22,60 50,28 34,28" />
        </svg>
    )
}

export function EyeIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M4,32 C14,16 26,10 32,10 C38,10 50,16 60,32 C50,48 38,54 32,54 C26,54 14,48 4,32 Z" />
            <circle cx="32" cy="32" r="8" fill="currentColor" stroke="none" />
        </svg>
    )
}

export function SnakeIcon(props) {
    return (
        <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" {...props}>
            <path d="M6,46 C14,20 22,52 30,32 C38,12 46,44 54,28" />
            <path d="M54,28 L60,22 M54,28 L60,30" />
        </svg>
    )
}