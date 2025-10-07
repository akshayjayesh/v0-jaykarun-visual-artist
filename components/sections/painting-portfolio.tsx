"use client"

type Item = {
  title: string
  medium: string
  status: "Sold"
  alt: string
  placeholderQuery: string
}

const items: Item[] = Array.from({ length: 39 }).map((_, i) => {
  const index = i + 1
  return {
    title: `Painting ${index}`,
    medium: index % 7 === 0 ? "Watercolor on paper" : "Acrylic on canvas",
    status: "Sold" as Item["status"],
    alt: `Painting ${index}`,
    placeholderQuery: `colorful abstract painting ${index}`,
  }
})

export function PaintingPortfolio() {
  return (
    <section id="portfolio" className="section section-muted">
      <div className="mx-auto px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight text-center">Painting Portfolio</h2>
        <div className="mt-8 flex justify-center">
          <div className="grid w-full max-w-4xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {items.map((it) => (
              <article key={it.title} className="group bg-muted/80 p-3 rounded-md">
                <img
                  src={`/.jpg?height=360&width=540&query=${encodeURIComponent(it.placeholderQuery)}`}
                  alt={it.alt}
                  className="w-full h-48 object-cover rounded-sm bg-muted"
                />
                <div className="mt-3 text-left">
                  <h3 className="text-base font-medium">{it.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">Medium: {it.medium}</p>
                  <p className="text-sm text-muted-foreground"><span className="font-semibold">Status:</span> {it.status}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
