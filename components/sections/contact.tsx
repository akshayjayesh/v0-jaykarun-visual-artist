"use client"

export function Contact() {
  return (
    <section id="contact" className="section section-muted">
      <div className="mx-auto max-w-3xl px-4">
        <h2 className="font-serif text-3xl md:text-4xl tracking-tight">Contact me</h2>
        <p className="mt-2 text-muted-foreground">Simply fill out the form and I&apos;ll be in touch soon!</p>

        <form className="mt-6 grid grid-cols-1 gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium">
                First Name
              </label>
              <input
                id="firstName"
                name="firstName"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium">
                Last Name
              </label>
              <input
                id="lastName"
                name="lastName"
                required
                className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium">
              Subject
            </label>
            <input
              id="subject"
              name="subject"
              required
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
