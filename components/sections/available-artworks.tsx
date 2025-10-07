"use client"

type Artwork = {
  title: string
  medium: string
  size: string
  alt: string
  placeholderQuery: string
}

const artworks: Artwork[] = [
  {
    title: "Loose Talk",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Three abstract figures with vibrant colors against gray.",
    placeholderQuery: "abstract three figures vibrant colors on gray background",
  },
  {
    title: "Loose He & She",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Two abstract figures in blues and purples.",
    placeholderQuery: "two abstract figures blue and purple",
  },
  {
    title: "Kite Flyers",
    medium: "Acrylic on canvas",
    size: "21 x 21 Inch",
    alt: "Bright abstract resembling kites in the sky.",
    placeholderQuery: "abstract kites flying bright yellow blue pink",
  },
  {
    title: "Dogs Day",
    medium: "Acrylic on canvas",
    size: "36 x 36 Inch",
    alt: "Dogs walking in a dark forest at night.",
    placeholderQuery: "dogs walking at night forest dark blues browns painting",
  },
  {
    title: "Transformation",
    medium: "Acrylic on canvas",
    size: "18 x 18 Inch",
    alt: "Two animal-like figures on yellow backdrop.",
    placeholderQuery: "abstract animal figures yellow backdrop blue orange",
  },
  {
    title: "Transformation",
    medium: "Watercolor on paper",
    size: "21 x 21 Inch",
    alt: "Watercolor cranes near water with delicate branches.",
    placeholderQuery: "watercolor cranes near water delicate branches blue white",
  },
]

export function AvailableArtworks() {
  return (
    <section id="available-works" className="section">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Available Artworks</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((a) => (
            <article key={`${a.title}-${a.size}`} className="group">
              <img
                src={`/.jpg?height=360&width=540&query=${encodeURIComponent(a.placeholderQuery)}`}
                alt={a.alt}
                className="w-full h-60 object-cover rounded-md bg-muted"
              />
              <div className="mt-3">
                <h3 className="text-lg font-medium">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.medium}</p>
                <p className="text-sm text-muted-foreground">{a.size}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
