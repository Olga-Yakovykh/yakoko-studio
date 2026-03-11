import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomeCTA = () => {
  return (
    <section className="py-16 md:py-20 bg-foreground">
      <div className="container-wide section-padding">
        <div className="max-w-2xl mx-auto text-center">

          <h2 className="text-2xl md:text-3xl font-semibold text-background tracking-tight mb-4">
            Good websites simplify. Never overwhelm.
          </h2>

          <p className="text-lg text-background/70 mb-8">
            Let’s talk about your project — and make it work for you
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">

            <Link
              to="/pricing"
              className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-full"
            >
              View Pricing
              <ArrowRight size={16} />
            </Link>

            <Link
              to="/contact"
              className="btn-premium inline-flex items-center justify-center gap-2 px-8 py-4 bg-background/10 text-background font-medium rounded-full border border-background/20"
            >
              Get in Touch
            </Link>

          </div>

          <p className="text-sm text-background/50">
            Free consultation • No obligation • Usually reply within 24 hours
          </p>

        </div>
      </div>
    </section>
  );
};

export default HomeCTA;