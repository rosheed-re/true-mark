import { NavLink } from 'react-router-dom'
import SignatureMark from './SignatureMark.jsx'

const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/portfolio', label: 'Portfolio' },
    { to: '/services', label: 'Services' },
    { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
    return (
        <header className="navbar">
            <NavLink to="/" className="navbar__brand" end>
                <SignatureMark size="small" />
                <span className="navbar__brand-text">
                    True Mark
                    <small>Tattoo Studio</small>
                </span>
            </NavLink>
            <nav className="navbar__links">
                {links.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.to === '/'}
                        className={({ isActive }) =>
                            isActive ? 'navbar__link navbar__link--active' : 'navbar__link'
                        }
                    >
                        {link.label}
                    </NavLink>
                ))}
            </nav>
        </header>
    )
}