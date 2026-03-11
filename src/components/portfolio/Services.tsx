import { Home, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  result: string;
  link: string;
}

const services: Service[] = [
  {
    icon: Home,
    title: "Holiday Rental Websites",
    description: "Build a direct connection with your guests. Your website makes it easy for people to find you, contact you, and book without intermediaries.",
    result: "Designed to reduce platform dependency",
    link: "/holiday-rentals",
  },
  {
    icon: Users,
    title: "Small Business Websites",
    description: "A clear, professional website that helps local customers understand what you offer, trust your work, and contact you with confidence.",
    result: "Built to support more enquiries",
    link: "/small-business",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-16 md:py-20">
      <div className="container-wide section-padding">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight mb-3">
              Websites I Design
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Websites that support your business — without the stress.
              Carefully built around your needs, not templates.          </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <div
                className="bg-card p-8 rounded-2xl border border-border shadow-card hover:shadow-hover hover:-translate-y-1 transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-5">
                  <service.icon size={22} className="text-primary" />
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm mb-4 flex-grow">
                  {service.description}
                </p>

                {/* Result highlight */}
                <p className="text-sm font-medium text-accent mb-6">
                  {service.result}
                </p>

                {/* CTA */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary hover:gap-3 transition-all duration-200 focus:outline-none focus:text-primary mt-auto"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;