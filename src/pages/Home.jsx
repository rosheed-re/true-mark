import { Link } from 'react-router-dom'
import SignatureMark from '../components/SignatureMark.jsx'
import { AnchorIcon, DaggerIcon, MoonIcon } from '../components/FlashIcons.jsx'

const steps = [
    { label: 'Consult', body: 'We talk placement, size, and style — and turn it into a real design.' },
    { label: 'Stencil', body: 'Your design gets transferred to skin so you can see it before a single line goes in.' },
    { label: 'Session', body: 'One sitting for small work, scheduled sessions for anything larger.' },
    { label: 'Aftercare', body: 'Clear instructions, and a free touch-up if anything needs it.' },
]

const focus = [
    { icon: AnchorIcon, title: 'Custom pieces', body: 'Original designs built around your idea, sized and placed to fit your body.' },
    { icon: DaggerIcon, title: 'Fine line & blackwork', body: 'Precise single-needle line work and solid black saturation, no shortcuts.' },
    { icon: MoonIcon, title: 'Flash day', body: 'First Saturday of the month — walk in, pick a pre-drawn design, walk out marked.' },
]

export default function Home() {
    return (
        <>
            <section className="hero container">
                <div className="hero__text">
                    <p className="eyebrow">Custom tattoo studio</p>
                    <h1>One needle.<br />One true line.</h1>
                    <p className="hero__lede">
                        True Mark is a small studio built around fine line and blackwork —
                        custom work, drawn once and drawn right.
                    </p>
                    <div className="hero__actions">
                        <Link to="/contact" className="btn btn--primary">Book a consult</Link>
                        <Link to="/portfolio" className="btn btn--ghost">See the portfolio</Link>
                    </div>
                </div>
                <div className="hero__mark" aria-hidden="true">
                    <SignatureMark size="large" />
                </div>
            </section>

            <section className="section container">
                <p className="eyebrow">What we do</p>
                <div className="focus-grid">
                    {focus.map(({ icon: Icon, title, body }) => (
                        <div className="card" key={title}>
                            <Icon className="card__icon" />
                            <h3>{title}</h3>
                            <p>{body}</p>
                        </div>
                    ))}
                </div>
            </section>

            <section className="section container steps">
                <p className="eyebrow">How a session works</p>
                <ol className="steps__list">
                    {steps.map((step) => (
                        <li key={step.label}>
                            <span className="steps__label">{step.label}</span>
                            <p>{step.body}</p>
                        </li>
                    ))}
                </ol>
            </section>

            <section className="section container cta-band">
                <h2>Got an idea you keep circling back to?</h2>
                <p>That one's worth a consult.</p>
                <Link to="/contact" className="btn btn--primary">Start the conversation</Link>
            </section>
        </>
    )
}