"use client"

type Item = {
  title: string
  medium: string
  status: "Sold"
  alt: string
  placeholderQuery: string
}

const items: Item[] = [
  {
    title: "Gods own fruit",
    medium: "Acrylic on canvas",
    status: "Sold",
    alt: "Branches with red berries.",
    placeholderQuery: "abstract branches with red berries",
  },
  {
    title: "A cat in my garden",
    medium: "Acrylic on canvas",
    status: "Sold",
    alt: "Cat sitting in a garden, semi-abstract.",
    placeholderQuery: "cat sitting in garden abstract",
  },
  {
    title: "Lovers",
    medium: "Acrylic on canvas",
    status: "Sold",
    alt: "Blue green white stripes composition.",
    placeholderQuery: "blue green white stripes abstract",
  },
  {
    title: "Summer Blooms",
    medium: "Acrylic on canvas",
    status: "Sold",
    alt: "Vibrant field of flowers.",
    placeholderQuery: "vibrant field of flowers painting",
  },
  {
    title: "Winter Arrives",
    medium: "Acrylic on canvas",
    status: "Sold",
    alt: "Light through trees, slightly blurry.",
    placeholderQuery: "light through trees winter painting",
  },
  {
    title: "Misty Morning",
    medium: "Watercolor on paper",
    status: "Sold",
    alt: "Soft flowers in misty tones.",
    placeholderQuery: "misty morning watercolor flowers",
  },
]

export function PaintingPortfolio() {
  return (
    <section id="portfolio" className="section section-muted">
      <div className="mx-auto max-w-6xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Painting Portfolio</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((it) => (
            <article key={it.title} className="group">
              <img
                src={`/.jpg?height=360&width=540&query=${encodeURIComponent(it.placeholderQuery)}`}
                alt={it.alt}
                className="w-full h-60 object-cover rounded-md bg-muted"
              />
              <div className="mt-3">
                <h3 className="text-lg font-medium">{it.title}</h3>
                <p className="text-sm text-muted-foreground">{it.medium}</p>
                <p className="text-sm text-muted-foreground"><span className="font-semibold">Status:</span> {it.status}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
