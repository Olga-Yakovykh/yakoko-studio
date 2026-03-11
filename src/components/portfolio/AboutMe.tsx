

const AboutMe = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary/30">
      <div className="container-wide section-padding">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-12 items-start">

            <div className="order-1 mx-auto md:mx-0 self-start">
              <div className="w-56 h-56 md:w-[280px] md:h-[280px] rounded-2xl bg-muted overflow-hidden border border-border/50">
                <img
                  src="/public/images/about-me.jpg"
                  alt="Portrait photo"
                  className="w-full h-full object-cover block"
                />
              </div>
            </div>

            <div className="order-2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-5">
                A real person behind every project.
              </h2>

              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  When you work with me, you work directly with the person building your website.
                  No handoffs, no chasing different people — just clear, honest communication
                  from start to finish.
                </p>
                <p>
                  I take on a small number of projects at a time, so each one gets the
                  attention it deserves. Your website is thoughtfully designed to fit
                  your business — not rushed or templated.
                </p>
              </div>

              <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  Direct communication
                </span>
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                  Based in Cornwall
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
