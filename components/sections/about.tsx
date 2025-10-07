"use client"

export function About() {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-1">
          <img
            src={`/.jpg?height=640&width=640&query=${encodeURIComponent(
              "artist working outdoor painting on easel"
            )}`}
            alt="Jay Karun painting outdoors"
            className="w-full h-64 md:h-full object-cover rounded-md bg-muted"
          />
        </div>
        <div className="md:col-span-2">
          <h2 className="font-serif text-3xl md:text-4xl tracking-tight">About</h2>
          <p className="mt-4 text-xl font-medium text-muted-foreground">“Each new day, each new experience inspires me.”</p>
          <p className="mt-4 leading-relaxed text-pretty">
            Art is a conversation for Jay Karun. The canvas is where his mind makes its most eloquent remarks. His
            observations on the canvas are a window to his forthright and thoughtful mind, reflecting his profound
            observation, passion, and compassion for nature and the human predicament.
          </p>
          <p className="mt-4 leading-relaxed text-pretty">
            Nature has been the biggest inspiration and medium for his work at all times. Elements from nature often
            form his language. Drawing a spark from commonplace sights, Jay Karun weaves a profound story on his
            canvas. When a thought strikes him, he lets it settle for a day and then gives it form on canvas.
          </p>
          <p className="mt-4 leading-relaxed text-pretty">
            His style leans toward impressionism. The depth of colours in his work can be attributed to this, and to
            his enthusiastic perspective toward life and art. Jay Karun loves interacting with fellow artists and is
            greatly influenced by masters like Oskar Kokoschka.
          </p>
        </div>
      </div>
    </section>
  )
}
