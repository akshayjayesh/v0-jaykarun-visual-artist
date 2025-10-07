"use client"

export function About() {
  return (
    <section id="about" className="section section-muted py-16">
      <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        <div className="md:col-span-4 flex flex-col gap-6">
          <h2 className="font-serif text-[56px] md:text-[96px] lg:text-[128px] leading-tight tracking-tight text-left text-muted-foreground">About</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F9e5464ed21f1499c91aab477b8b54d6e%2Fd031a8a0cc014cd5bc553a346baf703b?format=webp&width=800"
            alt="Jay Karun painting outdoors"
            className="w-48 md:w-56 lg:w-72 h-auto object-cover rounded-sm bg-muted border border-border"
          />
        </div>
        <div className="md:col-span-8">
          <p className="mt-1 text-2xl md:text-3xl font-medium text-muted-foreground">“Each new day, each new experience inspires me.”</p>
          <div className="mt-4 max-w-3xl text-base md:text-lg leading-relaxed text-pretty">
            <p>
              Art is a conversation for Jay Karun. The canvas is where his mind makes its most eloquent remarks. His
              observations on the canvas are a window to his forthright and thoughtful mind, reflecting his profound
              observation, passion, and compassion for nature and the human predicament.
            </p>
            <p className="mt-4">
              Nature has been the biggest inspiration and medium for his work at all times. Elements from nature often
              form his language. Drawing a spark from commonplace sights, Jay Karun weaves a profound story on his
              canvas. When a thought strikes him, he lets it settle for a day and then gives it form on canvas.
            </p>
            <p className="mt-4">
              His style leans toward impressionism. The depth of colours in his work can be attributed to this, and to
              his enthusiastic perspective toward life and art. Jay Karun loves interacting with fellow artists and is
              greatly influenced by masters like Oskar Kokoschka.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
