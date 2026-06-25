const artists = [
    {
        name: 'Mara Voss',
        role: 'Founder · Fine line & blackwork',
        bio: 'Started tattooing in 2014 after years as an illustrator. Believes a tattoo should look intentional from three feet away and from three inches.',
    },
    {
        name: 'Theo Banks',
        role: 'Blackwork & cover-ups',
        bio: 'Specialises in solid black saturation and reworking old tattoos people stopped loving. Books out fastest for cover-up consults.',
    },
]

export default function About() {
    return (
        <>
            <section className="section container">
                <p className="eyebrow">About the studio</p>
                <h1>A small shop, on purpose.</h1>
                <p className="page-lede">
                    True Mark is a two-chair studio. We keep it small so every piece gets
                    the same attention: one artist, one client, one design built from
                    scratch — not pulled off a wall.
                </p>
            </section>

            <section className="section container">
                <p className="eyebrow">Philosophy</p>
                <div className="about-grid">
                    <div>
                        <h3>True to the line</h3>
                        <p>A stencil is a promise. We re-stencil until placement is right, even if that costs us time.</p>
                    </div>
                    <div>
                        <h3>No flash-off-the-wall pressure</h3>
                        <p>Walk-in flash days are optional, not the default. Custom consults always come first on the calendar.</p>
                    </div>
                    <div>
                        <h3>Hygiene, not theatre</h3>
                        <p>Single-use needles, hospital-grade sterilisation, and a station reset between every client.</p>
                    </div>
                </div>
            </section>

            <section className="section container">
                <p className="eyebrow">Artists</p>
                <div className="artist-grid">
                    {artists.map((artist) => (
                        <div className="artist-card" key={artist.name}>
                            <h3>{artist.name}</h3>
                            <p className="artist-card__role">{artist.role}</p>
                            <p>{artist.bio}</p>
                        </div>
                    ))}
                </div>
            </section>
        </>
    )
}