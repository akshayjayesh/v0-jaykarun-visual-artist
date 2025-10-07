"use client"

export function Hero() {
  return (
    <section id="home" className="section section-muted">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
        <div className="order-2 md:order-1">
          <h1 className="font-serif text-balance leading-none text-6xl md:text-8xl lg:text-9xl tracking-tight">
            jaykarun
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-muted-foreground">Visual Artist</p>

          <div className="mt-6 text-sm md:text-base text-pretty text-muted-foreground">
            <p className="font-medium">Creative Director</p>
            <p className="font-medium">
              Graphic Designer <span className="mx-1">·</span> Story Teller
            </p>
            <p className="font-medium">
              Poet <span className="mx-1">·</span> Lyricist <span className="mx-1">·</span> Photographer{" "}
              <span className="mx-1">·</span> Tablist
            </p>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <img
            src="/images/hero-jaykarun.png"
            alt="Black and white portrait of Jay Karun looking to the right"
            className="w-full h-[320px] md:h-[480px] lg:h-[520px] object-cover rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
