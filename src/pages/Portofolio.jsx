import {
    AnchorIcon,
    DaggerIcon,
    MoonIcon,
    LightningIcon,
    EyeIcon,
    SnakeIcon,
} from '../components/FlashIcons.jsx'

const pieces = [
    { Icon: AnchorIcon, name: 'Anchor', style: 'Blackwork' },
    { Icon: DaggerIcon, name: 'Dagger', style: 'Fine line' },
    { Icon: MoonIcon, name: 'Crescent', style: 'Blackwork' },
    { Icon: LightningIcon, name: 'Storm', style: 'Bold line' },
    { Icon: EyeIcon, name: 'Watcher', style: 'Fine line' },
    { Icon: SnakeIcon, name: 'Serpent', style: 'Fine line' },
]

export default function Portfolio() {
    return (
        <section className="section container">
            <p className="eyebrow">Portfolio</p>
            <h1>Recent flash & custom work</h1>
            <p className="page-lede">
                These are placeholder icons standing in for real photos — swap each
                one out for a shot of the finished piece once you've got a shoot done.
            </p>
            <div className="flash-grid">
                {pieces.map(({ Icon, name, style }) => (
                    <figure className="flash-card" key={name}>
                        <div className="flash-card__art">
                            <Icon className="flash-card__icon" />
                        </div>
                        <figcaption>
                            <span>{name}</span>
                            <small>{style}</small>
                        </figcaption>
                    </figure>
                ))}
            </div>
        </section>
    )
}