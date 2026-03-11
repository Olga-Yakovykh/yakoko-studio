import { Particles } from "@/components/ui/particles.tsx"

interface HeroSectionProps {
  children: React.ReactNode
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      <Particles
        className="absolute inset-0 -z-10 hidden md:block"
        quantity={35}
        ease={120}
        staticity={80}
        size={0.35}
        color="#ee6f61"
      />

      <div className="relative z-10">
        {children}
      </div>
    </section>
  )
}