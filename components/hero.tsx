"use client"

export function Hero() {
  return (
    <section id="home" className="relative">
      {/* full-bleed hero image */}
      <div className="relative h-[360px] md:h-[520px] lg:h-[560px]">
        <img
          src={`/.jpg?height=1120&width=1920&query=${encodeURIComponent(
            "black and white portrait close up face on right side"
          )}`}
          alt="Black and white portrait facing right"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* subtle overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-background/0" />

        {/* centered title on left */}
        <div className="relative z-10 mx-auto max-w-6xl h-full px-4 flex flex-col justify-center">
          <h1 className="font-serif leading-none tracking-tight text-6xl md:text-8xl lg:text-9xl">jaykarun</h1>
          <p className="mt-3 text-xl md:text-2xl">Visual Artist</p>
        </div>

        {/* bottom roles strip */}
        <div className="absolute inset-x-0 bottom-0 bg-foreground/80 text-background">
          <div className="mx-auto max-w-6xl px-4">
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2 text-xs md:text-sm">
              <li>Creative Director</li>
              <li>Graphic Designer</li>
              <li>Story Teller</li>
              <li>Poet</li>
              <li>Lyricist</li>
              <li>Photographer</li>
              <li>Tablist</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
